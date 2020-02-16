import {css} from "../../node_mod/lit-element/lit-element.js";

export const main = css`
:host{
  display: inline-block;
  /* flex-grow: 1; */
  /* height: 128px; */
  padding: 0;
  /* display: flex; */
  /* flex-direction: column; */
  /* margin: 8px; */
  border: 1px solid #dcdcdc;
  box-shadow: 0 0 7px #e6e6e6;
  background: #fdfdfd;
  color: #5d5d5d;
  /* min-width: 320px; */
  border-radius: 6px;
  /* overflow: auto; */
  box-shadow: 2px 2px 16px #dbdbdb;
  /* max-width: 700px; */
  aborder: 1px solid var(--color);
}

*[contenteditable]{
	cursor: text !important;
}

/*:host(.active), */
:host(:not([src])){
  /* width: 100% !important; */
  display: block;
  /* height: auto; */
}


[hidden]{
	display: none !important;
}

*{
  outline: none;
}


main{
  border-radius: 5px;
  position: relative;
  transition: height .3s, margin .3s, top .3s, left .3s;
}

#options{
	background: transparent;  
	border-radius: 50%;
	cursor: pointer;
	border: 0;
	color: #4f4f4f;
	padding: 0;
	display: none;
}



:host([src]) #upload{
	/* display: block; */
}


@media screen and (min-width: 540px){
  :host(.active){
    width: 100% !important;
    border: 0;
    grid-column-start: 1;
    grid-column-end: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 32;
    background-color: #80808078 !important;
    margin: 0;
  }

}


:host(.active) main{
	background:white;
	width: 100%;
	/* margin: 120px auto; */
	border-radius: 8px;
	height: auto;
}


:host(.active) #title{
	font-size: 32px;
	color: var(--color);
	margin-top: 8px;
}


#x{
	display: none;
	/* background-color: var(--color); */
	border: 0;
	background: var(--bg-grad);
	color: white;
	border-radius: 50%;
	padding: 0;
	z-index: 14;
	width: 32px;
	height: 32px;
	cursor: pointer;
}


#x{
	display: none;
	position: absolute;
	font-size: 18px;
	top: 6px;
	opacity: 0.8;
	left: 6px;
	padding: 6px;
}

#x:before{
	margin-top: -6px;
	content: '0279C';
	display: block;
	transform: rotate(180deg);
}

:host(.active) #x{
	display: block;	
}

:host(.active) #x{
	display: block;
}

#owner-info{
	display: inline-block;
	margin-left: 6px;
	font-size: 14px;
	flex-grow: 1;
	height: 32px;
	margin-top: 12px;
	vertical-align: middle;
}

#info-when{
	display: block;
	font-size: 10px;
}


*{
  box-sizing: border-box;
}

#title, #description{
  width: 100%;
  border: 0;
  font-family: comfortaa;
  background-color: transparent;
}

#title{
  font-size: 18px;
  padding: 2px 12px 2px;
  margin-bottom: 2px;
  transition: opacity .3s;
  font-weight:bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--color);
}

#title:disabled, :host(:not(.active)) #title{
        cursor: pointer;
}

#title:hover,
#img:hover + #title{
  opacity: 0.8;
}

#description{
  font-size: 12px;
  overflow: hidden;
  padding: 4px 12px;
  resize: none;
  flex-grow: 1;
  min-height: 47px;
  height: auto;
  margin: 2px 0 8px;
}

h2[placeholder]:empty:before{
	content: attr(placeholder);
	opacity: .6;
}

#article{
	display: none;
	padding: 2px 10px;
}

:host(.active) #description{
	opacity: 0.3;
}

:host(.active) #article{
	display: block;
}

main{
  display: block;
  height: 100%;
  padding: 0;
  /* max-width: 500px; */
  width: 100%;
  display: flex;
  flex-direction: column;
}


img + main{
  width: calc(100% - 205px);
}

:host #gallery{
        flex-grow: 1;
        position: relative;
        overflow: hidden;
        display: flex;
        /* max-height: 240px; */
        min-height: 20px;
        height: 200px;
        vertical-align: middle;
}

#gallery > #upload{}

:host(.active) #gallery{
	height: 50vh;
}

:host #gallery:after {
	content: "";
	position: absolute;
	bottom: 3px;
	left: 15px;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 15px 15px 15px;
	border-color: transparent transparent #FFF transparent;
}

:host(.active) #gallery:after {
	display: none;
}


:host #img > img{
        width: 100%;
        object-fit: cover;
        vertical-align: top;
        margin: 0;
        flex-grow: 1;
        cursor: pointer;
        transition: transform .3s;
}

:host(:not(.active)) #img > img:hover{
  transform: scale(1.1);
}



:host(:not([src])) img{
  flex-grow: unset;
}

hr{
  border: 0.5px solid var(--color);
}

#owner-block{
	display: flex;
	padding: 8px 12px;
	/* border-top: 1px dotted var(--color); */
}

#owner-block > img{
  width: 32px;
  height: 32px;
  margin: 0;
  background-color: var(--color3, gainsboro);
  border-radius: 50%;
}

#owner-icon{
  vertical-align: middle;
}

#info-block{
  display: flex;
  background-color: var(--color);
  background: linear-gradient(#f1f1f1, #ebebeb);
  /* background: var(--bg-grad); */
  background: var(--bg, linear-gradient(#CCC, #BBB));
  opacity: 0.9;
  /* box-shadow: 0px 0 6px #adadad; */
  margin: 0 auto;
  width: 100%;
}


#info-block > *{
  display: none;
  flex-grow: 1;
  font-size: 16px;
  padding: 8px 10px;
  color: #ffffff;
  font-family: comfortaa;
  /* border-left: 1px solid #d0d0d0; */
  cursor: pointer;
  align-items: center;
}


:host([src]) *.forPublished{
  display: inline-flex !important;
}

:host(:not([src])) #stat-remove,
:host(:not([src])) #stat-publish{
  display: inline-block;
}


#info-block > *:first-child{
  border-left: 0;
}

#info-block > *:before{
  margin-right: 8px;
  font-size: 20px;
  font-family: "Font Awesome 5 Free";
  /* color: var(--color); */
}

#stat-publish{
  /* background-color: #ebb88b; */
}

#stat-remove{
  /* background-color: red; */
}
`;

console.log(main);