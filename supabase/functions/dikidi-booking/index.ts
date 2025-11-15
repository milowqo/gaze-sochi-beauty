import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, date, time } = await req.json();
    const DIKIDI_API_KEY = Deno.env.get('DIKIDI_API_KEY');

    if (!DIKIDI_API_KEY) {
      throw new Error('DIKIDI_API_KEY is not configured');
    }

    console.log('Creating booking:', { name, phone, date, time });

    // Dikidi API request
    const response = await fetch('https://dikidi.net/api/v1/booking', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DIKIDI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_name: name,
        client_phone: phone,
        date: date,
        time: time,
      }),
    });

    const responseData = await response.json();
    console.log('Dikidi API response:', responseData);

    if (!response.ok) {
      throw new Error(responseData.message || 'Ошибка при создании записи');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        data: responseData 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in dikidi-booking function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Неизвестная ошибка' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
