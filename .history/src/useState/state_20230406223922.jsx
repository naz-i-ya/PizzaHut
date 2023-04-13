import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   return(
    <form>
      <h1>Controlled Inputs</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <button type='submit'>Submit</button>
    </form>
   );
}


export default State