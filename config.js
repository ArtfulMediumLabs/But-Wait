var config = {}

// total seconds
config.duration = 4.0;
config.defaultPlaybackRate = 2.0;

// seconds as min/max bounds, min default 0, max default config.duration
config.voices = [
    {image: 'Lickin.png', file: 'bss_kfc_lickinlab_lick_', count:5, max: 1.5},
    {image: 'Mmmm.png', file: 'bss_kfc_lickinlab_mmm_', count:5, min: 1.5, max: 3.0},  
    {image: 'Music.png', file: 'bss_kfc_lickinlab_music_', count:5, min: 3.0}, 
    {image: 'X-Factor.png', file: 'bss_eggo_dingthing_leggo_', count:11}
];

config.voiceCount = config.voices.length;

// Order of precedence: image, color, default gray (if undefined)
config.backgroundColor = '#D7062E';
config.backgroundImage = 'background.png';
config.sliderColor = '#D7062E';
config.sliderTrack = '#4C1C1C';
config.tapDelay = 150;
