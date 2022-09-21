import React from "react";
// import { GITHUB, gitHubRedirectURL, path } from "../utils/gitHubCredentials.js";
import github from "../utils/images/github.png";
const GITHUB = "1b495944bfc018b1438e";
const path = "/";


const gitHubRedirectURL =
"/api/auth/github_login";


export default function GitHub() { 
  return (
    <div style={{width: 262}}>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${GITHUB}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}
      >
        <img
          src={github}          
        />
      </a>
    </div>
  );
}
