import { css } from "lit";

export const styles = css`

#clockContainer {
    background-color: whitesmoke;
    border-radius: 50%;
    border: 1px solid black;
    position: relative;
    height: 30vw;
    width: 30vw;
}
#hour,
#minute,
#second {
    position: absolute;
    background: black;
    border-radius: 10px;
    transform-origin: bottom;
}
#hour {
    width: 1.8%;
    height: 25%;
    top: 24.6%;
    left: 49.6%;
}
#minute {
    width: 1.6%;
    height: 40%;
    top: 9.6%;
    left: 49.6%;
}
#second {
    background-color:red;
    width: .5%;
    height: 40%;
    top: 9.6%;
    left: 49.6%;
}
#axis {
    position: absolute;
    border-radius: 50%;
    background-color:dimgray;
    width: 4%;
    height: 4%;
    top: 47.6%;
    left: 48.6%;
    box-shadow: 0 2px 2px;
}
.indicator{
    height: 48%;
    border-top: .5vw solid dimgray;
    background: none;
    position: absolute;
    left: calc(50% - 1px);
    width: 4px;
    background: none;
    transform-origin: bottom center;
}
.indicator-text{
    position: relative;
    margin-right: -.4vw;
    font-size: 2vw;
}
` 