import * as io from 'socket.io-client';

import MicIcon from '@mui/icons-material/Mic';
import IconButton from '@mui/material/IconButton';

import './profileMenu.scss';

export function ProfileMenu() {
    // const socket = io.connect('192.168.88.27:8080/chat');

    // socket.on('message', (message) => {
    //     console.log(message);
    // });

    window.onload = (e) => {
        // mainFunction(1000);
    };

    function mainFunction(time) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            const madiaRecorder = new MediaRecorder(stream);
            madiaRecorder.start();

            let audioChunks = [];
            let base64String = '';
            madiaRecorder.addEventListener('dataavailable', function (event) {
                audioChunks.push(event.data);
            });

            madiaRecorder.addEventListener('stop', function () {
                const audioBlob = new Blob(audioChunks);
                console.log(312);

                audioChunks = [];

                const fileReader = new FileReader();
                fileReader.readAsDataURL(audioBlob);
                fileReader.onloadend = function () {
                    base64String = fileReader.result as string;
                    const newData = base64String.split(';');
                    newData[0] = 'data:audio/ogg;';
                    const newDataData = newData[0] + newData[1];
                    const audio = new Audio(newDataData as string);
                    audio.play();
                };

                madiaRecorder.start();

                setTimeout(function () {
                    madiaRecorder.stop();
                }, time);
            });

            setTimeout(function () {
                madiaRecorder.stop();
            }, time);
        });
    }

    return (
        <div className='profile-menu-wrapper'>
            <IconButton className='color'>
                <MicIcon />
            </IconButton>
        </div>
    );
}
