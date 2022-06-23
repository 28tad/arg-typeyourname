import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countIncrement, fetchPhrases, deletePhrase } from '../../../storeToolkit/markSlice';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useEffect } from 'react';
import { useRef } from 'react';


function HiddenLevel() {

  const circle = useRef(null);

  const Mark = useSelector((state) => state.mark);
  const dispatch = useDispatch();

  function dialogue(e) {
    
    console.log(Mark.phrase);
  }
  useEffect(() => {
    dispatch(fetchPhrases(2))
  }, [])

  return (
    <div style={{ color: "white"}}>
      <Brightness1Icon
          style={{ color: "white"}}
          ref={circle}
          sx={{
            position: 'absolute',
            left: '49%'
          }}
          onClick={dialogue}
        />
    </div>
  );
}

export default HiddenLevel;
