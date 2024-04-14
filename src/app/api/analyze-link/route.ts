import { getOpenAiResults } from '@/utils/openai';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();
    if (!body?.systemPrompt || !body?.userPrompt) {
        return new Response('Invalid prompt.', { status: 400 });
    }

    const { systemPrompt, userPrompt } = body;

    try {
        const aiResult = await getOpenAiResults(systemPrompt, userPrompt);

        const trimmedResult = aiResult.choices[0].message.content?.trim();

        const fallbackResult = 'Sorry, there was a problem with your query.';

        const data = JSON.stringify({ text: trimmedResult || fallbackResult });

        return new Response(data);
    } catch (error) {
        console.error(error);
    }
}
