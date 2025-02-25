/*-----------------------------------------------------------------------------
>>> SHORTCUTS
-------------------------------------------------------------------------------
1.0 Keyboard
2.0 Mouse
-----------------------------------------------------------------------------*/

ImprovedTube.shortcuts = function() {
    var self = this,
        keys = {},
        wheel = 0,
        hover = false,
        status_timer;

    function showStatus(player, volume) {
        if (!player.querySelector('#it-status')) {
            var element = document.createElement('div');

            element.id = 'it-status';
            element.innerHTML = volume;

            document.querySelector('.html5-video-container').appendChild(element);
        } else {
            player.querySelector('#it-status').innerHTML = volume;
        }

        if (status_timer) {
            clearTimeout(status_timer);
        }

        status_timer = setTimeout(function() {
            if (player.querySelector('#it-status')) {
                player.querySelector('#it-status').remove();
            }
        }, 500);
    }

    function start(type = 'keys') {
        if (document.activeElement && ['EMBED', 'INPUT', 'OBJECT', 'TEXTAREA', 'IFRAME'].indexOf(document.activeElement.tagName) !== -1 || event.target.isContentEditable) {
            return false;
        }

        var features = {
            shortcut_240p: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.setPlaybackQualityRange('small');
                    player.setPlaybackQuality('small');
                }
            },
            shortcut_360p: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.setPlaybackQualityRange('medium');
                    player.setPlaybackQuality('medium');
                }
            },
            shortcut_480p: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.setPlaybackQualityRange('large');
                    player.setPlaybackQuality('large');
                }
            },
            shortcut_720p: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.setPlaybackQualityRange('hd720');
                    player.setPlaybackQuality('hd720');
                }
            },
            shortcut_1080p: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.setPlaybackQualityRange('hd1080');
                    player.setPlaybackQuality('hd1080');
                }
            },
            shortcut_1440p: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.setPlaybackQualityRange('hd1440');
                    player.setPlaybackQuality('hd1440');
                }
            },
            shortcut_2160p: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.setPlaybackQualityRange('hd2160');
                    player.setPlaybackQuality('hd2160');
                }
            },
            shortcut_2880p: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.setPlaybackQualityRange('hd2880');
                    player.setPlaybackQuality('hd2880');
                }
            },
            shortcut_4320p: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.setPlaybackQualityRange('highres');
                    player.setPlaybackQuality('highres');
                }
            },
            shortcut_picture_in_picture: function() {
                var video = document.querySelector('#movie_player video');

                if (video) {
                    video.requestPictureInPicture();
                }
            },
            shortcut_play_pause: function() {
                var video = document.querySelector('#movie_player video');

                if (video) {
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                }
            },
            shortcut_stop: function() {
                var player = document.querySelector('#movie_player');

                if (player) {
                    player.stopVideo();
                }
            },
            shortcut_next_video: function() {
                var player = document.querySelector('#movie_player');

                if (player && player.nextVideo) {
                    player.nextVideo();
                }
            },
            shortcut_prev_video: function() {
                var player = document.querySelector('#movie_player');

                if (player && player.previousVideo) {
                    player.previousVideo();
                }
            },
            shortcut_seek_backward: function() {
                var player = document.querySelector('#movie_player');

                if (player && player.seekBy) {
                    player.seekBy(-10);
                }
            },
            shortcut_seek_forward: function() {
                var player = document.querySelector('#movie_player');

                if (player && player.seekBy) {
                    player.seekBy(10);
                }
            },
            shortcut_increase_volume: function() {
                var player = document.querySelector('.html5-video-player');

                if (player && player.setVolume && player.getVolume) {
                    player.setVolume(player.getVolume() + (Number(ImprovedTube.storage.shortcut_volume_step) || 5));
                }

                showStatus(player, player.getVolume());
            },
            shortcut_decrease_volume: function() {
                var player = document.querySelector('.html5-video-player');

                if (player && player.setVolume && player.getVolume) {
                    player.setVolume(player.getVolume() - (Number(ImprovedTube.storage.shortcut_volume_step) || 5));
                }

                showStatus(player, player.getVolume());
            },
            shortcut_screenshot: function() {
                var player = document.querySelector('.html5-video-player');

                if (player && player.setVolume && player.getVolume) {
                    ImprovedTube.screenshot();
                }
            },
            shortcut_increase_playback_speed: function() {
                var video = document.querySelector('#movie_player video');

                if (video && video.playbackRate) {
                    video.playbackRate = Math.max(Number((video.playbackRate + Number(ImprovedTube.storage.shortcut_playback_speed_step)).toFixed(2)), .1);

                    showStatus(document.querySelector('#movie_player'), video.playbackRate);
                }
            },
            shortcut_decrease_playback_speed: function() {
                var video = document.querySelector('#movie_player video');

                if (video && video.playbackRate) {
                    video.playbackRate = Math.max(Number((video.playbackRate - Number(ImprovedTube.storage.shortcut_playback_speed_step)).toFixed(2)), .1);

                    showStatus(document.querySelector('#movie_player'), video.playbackRate);
                }
            },
            shortcut_go_to_search_box: function() {
                var search = document.querySelector('#search');

                if (search && search.focus) {
                    search.focus();
                }
            },
            shortcut_activate_fullscreen: function() {
                var player = document.querySelector('#movie_player');

                if (player && player.toggleFullscreen) {
                    player.toggleFullscreen();
                }
            },
            shortcut_activate_captions: function() {
                var player = document.querySelector('#movie_player');

                if (player && player.querySelector('.ytp-subtitles-button')) {
                    player.querySelector('.ytp-subtitles-button').click();
                }
            },
            shortcut_like_shortcut: function() {
                var like = (document.querySelectorAll('.like-button-renderer-like-button')[0] || document.querySelectorAll('#menu #top-level-buttons ytd-toggle-button-renderer')[0]);

                if (like) {
                    like.click();
                }
            },
            shortcut_dislike_shortcut: function() {
                var like = (document.querySelectorAll('.like-button-renderer-dislike-button')[0] || document.querySelectorAll('#menu #top-level-buttons ytd-toggle-button-renderer')[1]);

                if (like) {
                    like.click();
                }
            },
            shortcut_dark_theme: function() {
                if (document.documentElement.hasAttribute('dark')) {
                    document.documentElement.removeAttribute('dark');
                    document.documentElement.removeAttribute('it-theme');
                } else {
                    document.documentElement.setAttribute('dark', '');
                    document.documentElement.setAttribute('it-theme', 'true');
                }
            },
            shortcut_custom_mini_player: function() {
                ImprovedTube.storage.mini_player = !ImprovedTube.storage.mini_player;
            
                ImprovedTube.mini_player();
                
                if (ImprovedTube.storage.mini_player === true) {
                    ImprovedTube.mini_player__mode = true;
        
                    ImprovedTube.mini_player__original_width = ImprovedTube.mini_player__element.offsetWidth;
                    ImprovedTube.mini_player__original_height = ImprovedTube.mini_player__element.offsetHeight;
                    
                    ImprovedTube.mini_player__element.classList.add('it-mini-player');
                    
                    ImprovedTube.mini_player__x = Math.max(0, Math.min(ImprovedTube.mini_player__x, document.body.offsetWidth - ImprovedTube.mini_player__width));
                    ImprovedTube.mini_player__y = Math.max(0, Math.min(ImprovedTube.mini_player__y, window.innerHeight - ImprovedTube.mini_player__height));
                    
                    ImprovedTube.mini_player__cursor = '';
                    document.documentElement.removeAttribute('it-mini-player-cursor');
                    
                    ImprovedTube.mini_player__setPosition(ImprovedTube.mini_player__x, ImprovedTube.mini_player__y);
                    
                    ImprovedTube.mini_player__setSize(ImprovedTube.mini_player__width, ImprovedTube.mini_player__height);
                    
                    window.addEventListener('mousedown', ImprovedTube.mini_player__mousedown);
                    window.addEventListener('mousemove', ImprovedTube.mini_player__cursorUpdate);
                    
                    window.dispatchEvent(new Event('resize'));
                }
            },
            shortcut_stats_for_nerds: function() {
                var player = document.querySelector('#movie_player');

                if(player) {
                    if(player.querySelector('.html5-video-info-panel')) {
                        var statsForNerdsPanel = player.querySelector('.html5-video-info-panel');
                        var displayType = statsForNerdsPanel.style.display;

                        if(displayType != 'none') {
                            statsForNerdsPanel.querySelector('.html5-video-info-panel-close').click();
                        } else {
                            var rightClickMenu = document.querySelector('.ytp-popup.ytp-contextmenu .ytp-panel .ytp-panel-menu');
    
                            if(rightClickMenu && rightClickMenu.querySelector('div:nth-child(7)')) {
                                rightClickMenu.querySelector('div:nth-child(7) .ytp-menuitem-content').click();
                            }
                        }
                    } else {
                        if(document.createEvent) {
                            var rightClickEvent = document.createEvent('HTMLEvents');
                            rightClickEvent.initEvent('contextmenu', true, false);
                            player.dispatchEvent(rightClickEvent);
                        }
                        var rightClickMenu = document.querySelector('.ytp-popup.ytp-contextmenu .ytp-panel .ytp-panel-menu');

                        if(rightClickMenu && rightClickMenu.querySelector('div:nth-child(7)')) {
                            rightClickMenu.querySelector('div:nth-child(7) .ytp-menuitem-content').click();
                        }
                    }
                }
            },
            shortcut_toggle_cards: function() {
                const html = document.getElementsByTagName("html")[0];
                if(html.getAttribute("it-player-hide-cards") === "true") {
                    html.setAttribute("it-player-hide-cards", "false");
                } else {
                    html.setAttribute("it-player-hide-cards", true);
                }
            }
        };

        for (var i in features) {
            if (self.isset(self.storage[i])) {
                var data = JSON.parse(self.storage[i]) || {};

                if (
                    (data.key === keys.key || !self.isset(data.key)) &&
                    (data.shiftKey === keys.shiftKey || !self.isset(data.shiftKey)) &&
                    (data.ctrlKey === keys.ctrlKey || !self.isset(data.ctrlKey)) &&
                    (data.altKey === keys.altKey || !self.isset(data.altKey)) &&
                    ((data.wheel > 0) === (wheel > 0) || !self.isset(data.wheel)) &&
                    (((data.on_top_of_player === true ? hover === true : true) && (data.wheel > 0) === (wheel > 0) && Object.keys(keys).length === 0 && keys.constructor === Object) || (self.isset(data.key) || self.isset(data.altKey) || self.isset(data.ctrlKey)))
                ) {
                    if (type === 'wheel' && self.isset(data.wheel) || type === 'keys') {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    features[i]();

                    if (type === 'wheel' && self.isset(data.wheel) || type === 'keys') {
                        return false;
                    }
                }
            }
        }
    }


    /*-------------------------------------------------------------------------
    1.0 Keyboard
    -------------------------------------------------------------------------*/

    window.addEventListener('keydown', function(event) {
        keys = {
            key: event.key,
            keyCode: event.keyCode,
            shiftKey: event.shiftKey,
            ctrlKey: event.ctrlKey,
            altKey: event.altKey
        };

        start();
    }, true);

    window.addEventListener('keyup', function(event) {
        keys = {};
    }, true);


    /*-------------------------------------------------------------------------
    2.0 Mouse
    -------------------------------------------------------------------------*/

    window.addEventListener('mousemove', function(event) {
        hover = false;

        for (var i = 0, l = event.path.length; i < l; i++) {
            if (event.path[i].classList && event.path[i].classList.contains('html5-video-player')) {
                hover = true;
            }
        }
    }, {
        passive: false,
        capture: true
    });

    window.addEventListener('wheel', function(event) {
        wheel = event.deltaY;

        start('wheel');
    }, {
        passive: false,
        capture: true
    });
};
