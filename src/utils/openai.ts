import OpenAI from 'openai';

const configuration = {
    organization: 'org-mcVmZqH5liO68x06cQzCN8Ff',
    apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

const model = process.env.OPENAI_GPT_MODEL
    ? process.env.OPENAI_GPT_MODEL
    : 'gpt-3.5-turbo';

//https://platform.openai.com/docs/api-reference/chat/create?lang=node.js
export const getOpenAiResults = async (
    systemPrompt: string,
    userPrompt: string,
    max_tokens = 460
) => {
    const messages = [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
    ];

    const filteredMessages = messages.filter(
        (message) => message.content !== ''
    );

    return await openai.chat.completions.create({
        model,
        messages: filteredMessages,
        temperature: 0.7, // Higher values means the model will take more risks.
        max_tokens, // The maximum number of tokens to generate in the completion.
        // frequency_penalty: 0.5, // Number between -2.0 and 2.0.
        // presence_penalty: 0, // Number between -2.0 and 2.0.
    });
};
