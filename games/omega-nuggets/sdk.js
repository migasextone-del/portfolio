// Standalone portfolio build: the Yandex Games SDK exists only on the platform,
// so init fails after a short delay and the game starts without ads/cloud saves.
window.YaGames={init:function(){return new Promise(function(_,rej){setTimeout(function(){rej(new Error('standalone'))},2500)})}};
