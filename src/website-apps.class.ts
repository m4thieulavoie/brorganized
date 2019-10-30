import slackImage from './assets/slack.png';
import messengerImage from './assets/messenger.png';

export interface Tab {
    url: string;
}

export interface WebsiteApp {
    name: string;
    image: string;
    tabs: Tab[]
}

export const ALL_APPS = [
    {
        name: 'Slack',
        image: slackImage,
        tabs: [
            {
                url: 'https://app.slack.com/client'
            },
        ] as Tab[],
    },
    {
        name: 'Messenger',
        image: messengerImage,
        tabs: [
            {
                url: 'https://messenger.com'
            }
        ] as Tab[]
    },
    {
        name: 'Gmail',
        image: messengerImage,
        tabs: [
            {
                url: 'https://mail.google.com/mail/u/0/#inbox'
            }
        ] as Tab[]
    }
] as WebsiteApp[]