'use strict'

function sourcesInitialiser(rawBuffersName, playableSources){ 
  window[playableSources] = []
  new Promise((resolve,reject)=>{
    window[rawBuffersName]
      .forEach((rawBuffer, i) =>{ window.audioCtx.decodeAudioData(rawBuffer)
      .then((decodedBuffer) => {
        let source = window.audioCtx.createBufferSource()
        source.buffer = decodedBuffer
        return source
      })
      .then((source) => {
        window[playableSources][i] = source
        window[playableSources][i].connect(window.audioCtx.destination)
        if(i === window[rawBuffersName].length -1 ) resolve(`An array containing playable sources
                                                            can be found  the global window object,
                                                            here: window.${playableSources}`)
      })})
  }).then((message)=>console.log(message))
  .catch((e) => { console.log(e) })
}


function rawBuffersLoader(url, rawBuffersName = 'rawBuffs'){
  window.audioCtx = new (window.AudioContext || window.webkitAudioContext)
  window[rawBuffersName] = []
  if(!(url instanceof Array)) return Error('put your urls into and array')
  if( typeof context === 'undefinded' ){ context = new AudioContext() }
  url.forEach((el, i) => {
    fetch(el)
      .then((res) => res.arrayBuffer())
      .then((rawBuff) => window[rawBuffersName][i] = rawBuff )
      .then(() => console.log('raw buffers for each of your sound are reacheable here: window.', rawBuffersName ))
  })  
}

module.exports.rawBuffersLoader = rawBuffersLoader
module.exports.sourcesInitialiser = sourcesInitialiser
