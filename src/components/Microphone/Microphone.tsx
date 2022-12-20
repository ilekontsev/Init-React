import { useEffect, useState } from 'react';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import IconButton from '@mui/material/IconButton';

import styles from './Microphone.module.scss';

let stompClient = null;
let mediaRecorder: MediaRecorder = null;
let audioChunks = [];
const callback1 = null;
const callback2 = null;

export function Microphone() {
    const [microActive, setMicroActive] = useState(false);

    const toggleMicro = () => {
        setMicroActive(!microActive);
        !microActive && createRecord(1000);
        microActive && destroyEvents();
    };

    useEffect(() => {
        const socket = new SockJS('https://192.168.88.27:8443/chat');
        stompClient = Stomp.over(socket);
        stompClient.debug = null;
        stompClient.connect({}, onConnected, onError);

        microActive && createRecord(1000);
    }, []);

    const onConnected = () => {
        console.log('onConnected');

        stompClient.subscribe('/test/1', (mes) => {
            const audio = new Audio(mes.body as string);
            audio.play();
        });
    };
    const onError = (error) => {
        this.setState({
            error: 'Could not connect you to the Chat Room Server. Please refresh this page and try again!',
        });
    };

    const createEvents = () => {
        mediaRecorder.addEventListener('dataavailable', saveAudioChunks);
        mediaRecorder.addEventListener('stop', sendAudio);
    };

    const destroyEvents = () => {
        mediaRecorder.removeEventListener('dataavailable', saveAudioChunks);
        mediaRecorder.removeEventListener('stop', sendAudio);
        mediaRecorder = null;
    };

    const saveAudioChunks = (event) => {
        audioChunks.push(event.data);
    };

    const sendAudio = () => {
        const audioBlob = new Blob(audioChunks);

        audioChunks = [];
        console.log(31);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(audioBlob);
        fileReader.onloadend = () => {
            const base64String = fileReader.result as string;
            const newData = base64String.split(';');
            newData[0] = 'data:audio/ogg;';
            const newDataData = newData[0] + newData[1];
            const audio = new Audio(newDataData as string);
            audio.play();
            // stompClient.send('/message', {}, newDataData);
        };

        mediaRecorder?.start();

        setTimeout(() => {
            mediaRecorder?.stop();
        }, 1000);
    };

    const createRecord = (time) => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start();

            createEvents();

            setTimeout(() => {
                mediaRecorder.stop();
            }, time);
        });
    };

    return (
        <IconButton onClick={toggleMicro}>
            {microActive ? (
                <MicIcon className={styles.color} />
            ) : (
                <MicOffIcon className={styles.color} />
            )}
        </IconButton>
    );
}
