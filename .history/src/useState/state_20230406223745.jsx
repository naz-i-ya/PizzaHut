import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   return(
    <form>
      <h1>Controlled Inputs</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
    </form>
   );
}


export default State