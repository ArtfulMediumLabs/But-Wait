var config = {}

// total seconds
config.duration = 4.0;
config.defaultPlaybackRate = 1.1;

// seconds as min/max bounds, min default 0, max default config.duration
config.voices = [
    {image: 'Lickin.png', file: 'bss_kfc_lickinlab_lick_', count:26, time: 1.45, velocity: 0.8, y: 62},
    {image: 'Mmmm.png', file: 'bss_kfc_lickinlab_mmm_', count:26, time: 1.45, velocity: 0.8, y: 413},  
    {image: 'Music.png', file: 'bss_kfc_lickinlab_music_', count:26, time: 1.45, velocity: 0.8, y: 722}, 
    {image: 'X-Factor.png', file: 'bss_kfc_lickinlab_xfactor_', count:26, min:[0.0,2.3], max:[0.6,3.2]}
];

config.voiceCount = config.voices.length;

// Order of precedence: image, color, default gray (if undefined)
config.backgroundColor = '#D7062E';
config.backgroundImage = 'background.png';
config.sliderColor = '#D7062E';
config.sliderTrack = '#4C1C1C';
config.tapDelay = 150;
