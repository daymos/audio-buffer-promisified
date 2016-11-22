# HTML5 audiobuffer-promisified
##Easy to use promisified version of audioBuffer



####Why this library?
AudioBuffer is necessary if you need to play precisely sync audio files in the browser. 
This library helps you deal with the fact that playable sources must be reloaded after having been started.  

 The `rawBufferLoader` function makes all the http calls to get the raw buffer only once.  
 
The `sourcesInitialiser` recreate playable buffers from the raw ones.



#####How to use it
Load all audio sources you want eventually to play:

```
rawBuffersLoader(['http://some-audio-file-url','http://some-other-audio-file-url' ], myRawBufferArray)

```
The first parameters is and array of urls that point to all the audio files you want to load.

The second parameter is a string and should be the name of the variable attached to the window object where you want to save your raw buffers.

```
sourcesInitialiser(rowBufferName, playableSources)

```
The first parameters is a string, should be the value created by rawBuffersLoader.
The second parameter is a string, should be the name of the variable that will contain the playable sources. 

###Example
```
rawBuffersLoader(['http://localhost:30001/audio1.wav','http://google.com/music.wav' ], 'rBuff')
.then(()=>{sourcesInitialiser('rBuffs', 'playableStuffArray')})
.then(()=> window.playableStuffArray[0].start(0)) // this will play the first sound in the array
``` 

