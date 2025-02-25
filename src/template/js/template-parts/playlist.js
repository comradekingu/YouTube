Menu.main.section.playlist = {
    type: 'button',
    before: '<svg stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    label: 'playlist',
    class: 'satus-button--playlist',
    appearanceKey: 'playlist',

    section: {
        type: 'section',
        variant: 'card',

        playlist_autoplay: {
            type: 'switch',
            label: 'autoplay',
            value: true
        },
        playlist_up_next_autoplay: {
            type: 'switch',
            label: 'upNextAutoplay',
            value: true
        },
        playlist_reverse: {
            type: 'switch',
            label: 'reverse'
        }
    },

    section2: {
        type: 'section',
        variant: 'card',

        playlist_repeat: {
            type: 'switch',
            label: 'repeat'
        },
        playlist_shuffle: {
            type: 'switch',
            label: 'shuffle'
        }
    }
};
