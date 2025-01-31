import dotenv from 'dotenv'
dotenv.config()

import {
    Client,
    GatewayIntentBits,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ],
});

client.login(process.env.DISCORD_TOKEN);

client.on('messageCreate', async (message) => {

    console.log(message)

    if (!message?.author.bot) {
        message.author.send({
            content: "Test!",
            components: [
                {
                    "type": 1,
                    "components": [
                        {
                            type: 2,
                            label: "Bouton Principal",
                            style: 1,
                            custom_id: 'button_main'
                        },
                        {
                            type: 2,
                            label: "Bouton secondaire",
                            style: 2,
                            custom_id: 'button_secondary'
                        },
                        {
                            type: 2,
                            label: "Bouton success",
                            style: 3,
                            custom_id: 'button_success'
                        },
                        {
                            type: 2,
                            label: "Bouton Danger",
                            style: 4,
                            custom_id: 'button_danger'
                        },
                        {
                            type: 2,
                            label: "Bouton Lien",
                            style: 5,
                            url: 'https://mail.google.com/mail/u/0/'
                        }
                    ]
                },
                {
                    "type": 1,
                    "components": [
                        {
                    "type": 3,
                    "custom_id": "class_select_1",
                    "options":[
                        {
                            "label": "Caca",
                            "value": "caca",
                            "description": "faire un gros caca"
                        },
                        {
                            "label": "Pipi",
                            "value": "pipi",
                            "description": "Pipi"
                        },
                        {
                            "label": "Prout",
                            "value": "prout",
                            "description": "C QUI IL A PETE AHHHHHH"
                        }
                    ],
                    "placeholder": "t",
                    "min_values": 1,
                    "max_values": 2
                        }
                    ]
                },
                {
                    "type": 1,
                    "components": [
                        {
                            "type": 6,
                            "custom_id": "role",
                        }
                    ]
                }
            ]
        });
    }
});