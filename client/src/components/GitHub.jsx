import React from "react";
// import { GITHUB, gitHubRedirectURL, path } from "../utils/gitHubCredentials.js";
import github from "../utils/images/github.png";

export default function GitHub() { 
  return (
    <div style={{width: 262}}>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB}&redirect_uri=${process.env.gitHubRedirectURL}?path=${process.env.path}&scope=user:email`}
      >
        <img
          src={github}          
        />
      </a>
    </div>
  );
}
