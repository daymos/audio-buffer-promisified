rawBuffersLoader(
  [
    'https://soundz-server.herokuapp.com/128_C_MelodyWoody_SP_01.wav',
    'https://soundz-server.herokuapp.com/128_Bm_BassFluffy_SP_01.wav',
    'https://soundz-server.herokuapp.com/128_C_ArpWaver_SP_01.wav',
    'https://soundz-server.herokuapp.com/128_C_MelodyWoody_SP_01.wav',
    'https://soundz-server.herokuapp.com/128_D_MelodyAaahFixed_SP_01.wav',
    'https://soundz-server.herokuapp.com/128_DrumsNourished_SP_01.wav',
    'https://soundz-server.herokuapp.com/128_Drums_SP_10.wav',
    'https://soundz-server.herokuapp.com/128_Percloop_SP_02.wav',
    'https://soundz-server.herokuapp.com/140_DrumsCut_SP_01.wav',
    'https://soundz-server.herokuapp.com/85_Drums_SP_01.wav'
  ],
  'rbuffs'
)
.then(()=>sourcesInitialiser('rbuffs', 'res'))
.then(()=>console.log(res))
