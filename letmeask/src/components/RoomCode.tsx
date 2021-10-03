import copyImg from '../assets/images/copy.svg';
import toast, { Toaster } from 'react-hot-toast';

import '../styles/room-code.scss'

type RoomCodeProps = {
  code: string;
}


export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <div>
      <button className="room-code" onClick= {function(){
        copyRoomCodeToClipBoard()
        
        toast.success('Successfully copied!',{
          style: {
            color: '#737388'
          },
          iconTheme: {
            primary: '#835afd',
            secondary: '#FFF'
          }
        })
      }}>

        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
        
      </button>

      <Toaster />
    </div>
  )
}