export const Timer = `/** 
Timer class
*/
class Timer {
    /** 
    Gets a high resolution timer in seconds.
    */
    Float getHiResTimer();
    /** 
    This function will return the number of seconds between start and stop.
    */
    Float getSeconds();
    /** 
    Gets a timer value in seconds from the real time system clock. This is normally a low resolution timer.
    */
    Float getTimer();
    /** 
    This function will start the timer.
    */
    Void start();
    /** 
    This function will stop the timer.
    */
    Void stop();
}`;