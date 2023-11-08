export default function Q_rsqrt(number) {
    let i;
    let x2, y;
  
    const threehalfs = 1.5;
  
    x2 = number * 0.5;
    y = number;
    //evil floating bit level hacking
    let buf = new ArrayBuffer(4);
    (new Float32Array(buf))[0] = number;
    i =  (new Uint32Array(buf))[0];
    i = (0x5f3759df - (i >> 1)); //What the fuck?
    (new Uint32Array(buf))[0] = i;
    y = (new Float32Array(buf))[0];
    y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
    return y;
}
