import OpenAI from 'openai';
import  Configuration from 'openai'

import { SUPPORTED_LANGUAJES } from '../../constants';
import { type FromLanguaje, type Languaje } from '../../types';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const configuration = new Configuration({ apiKey });
const openai = new OpenAI(configuration);

export async function translate({
    fromLanguaje,
    toLanguaje,
    text
}: {
    fromLanguaje: FromLanguaje;
    toLanguaje: Languaje;
    text: string;
}) {
    const messages = [
        {
            role: 'System',
            content: 'You are an AI that translates text. You receive a text from the user. Do not answer, just translate the text. The language you translate to is surrounded by `[[` and `]]`.'
        },
        {
            role: 'user',
            content: 'Hola mundo {{Español}} [[English]]'
        },
        {
            role: 'Assitant',
            content: 'Hello world'
        },
        {
            role: 'User',
            content: 'How are you? {{auto}} [[Deutsch]]'
        },
        {  
            role: 'Assitant',
            content: 'Wie geht es dir?'
        },
        {
            role: 'User',
            content: 'Bon dia, con estas?  {{auto}} [[Español]]'
        },
        {   
            role: 'Assitant',
            content: 'Buenops días, ¿cómo estás?'

        }
    ]

    const fromCode = fromLanguaje === 'auto' ? 'auto' : SUPPORTED_LANGUAJES[fromLanguaje]
    const toCode = SUPPORTED_LANGUAJES[toLanguaje]

    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [...messages,
        {
            role: 'User',
            content: `${text} {{${fromCode}} [[${toCode}]]`
        }
    ]
    })

    return completion.data.choices[0]?.messages?.content

}
