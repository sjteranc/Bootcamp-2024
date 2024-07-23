import React, { useState } from 'react';

type Props = {
  alertMsg: () => void;
  title: string;
  count: number;
};

function MyButton({ alertMsg, title, count }: Props) {

  return <>
  
    <button onClick={ alertMsg}>
      {title}
    </button>
    <p>{count}</p>
    </>
}

export default MyButton;
