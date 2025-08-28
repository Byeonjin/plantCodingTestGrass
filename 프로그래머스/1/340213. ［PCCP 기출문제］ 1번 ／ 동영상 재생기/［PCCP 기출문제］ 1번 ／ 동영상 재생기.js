const cl = text => console.log(text);

const next = (crntTime, videoLength) => {
    const timeArr = crntTime.split(":");
    const videoLengthArr = videoLength.split(":");
    
    let minutes = parseInt(timeArr[0]);
    let seconds = parseInt(timeArr[1]) + 10;
    
    let lengthMinutes = parseInt(videoLengthArr[0]);
    let lengthSeconds = parseInt(videoLengthArr[1]);

    if(seconds >= 60){
        seconds = seconds % 60;    
        minutes += 1;
    }else{
        seconds = seconds;
    }
    
    if(lengthMinutes < minutes || (lengthMinutes === minutes && lengthSeconds < seconds)){
        return videoLength;
    }
    
    return `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`
}

const prev = (crntTime) => {
    const timeArr = crntTime.split(":");
    
    let minutes = parseInt(timeArr[0]);
    let seconds = parseInt(timeArr[1]) - 10;
    
    if(seconds < 0){
        seconds = 60 + seconds;
        minutes -= 1;
    }else{
        seconds = seconds;
    }
    
    if(0 > minutes){
        return "00:00";
    }
    
    return `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`
}

const skip = (pos, opStart, opEnd) => {
    const crntTime = pos.split(':');
    const opStartTime = opStart.split(":");
    const opEndTime = opEnd.split(":");
    
    const crntMinutes = parseInt(crntTime[0]);
    const crntSeconds = parseInt(crntTime[1]);
    const totalSeconds = crntMinutes * 60 + crntSeconds;
    
    const opStartMinutes = parseInt(opStartTime[0]);
    const opStartSeconds = parseInt(opStartTime[1]);
    const opStartTotalSeconds = opStartMinutes * 60 + opStartSeconds;
    
    const opEndMinutes = parseInt(opEndTime[0]);
    const opEndSeconds = parseInt(opEndTime[1]);
    const opEndTotalSeconds = opEndMinutes * 60 + opEndSeconds;
    
    
    if(opStartTotalSeconds <= totalSeconds && totalSeconds <= opEndTotalSeconds){
        return true
    }else{
        return false
    } 
}

const solution = (video_len, pos, op_start, op_end, commands) => {
    let answer = pos;
    
    if(skip(answer, op_start, op_end)){
            answer = op_end;
        }
    
    for(const command of commands){
        if(command === "next"){
            answer = next(answer, video_len)
        }else if(command === "prev"){
            answer = prev(answer)
        }
        
        if(skip(answer, op_start, op_end)){
            answer = op_end;
        }
    }
    
    return answer;
}