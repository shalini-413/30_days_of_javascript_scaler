function AOT(s1, s2, s3) {
    let peri_m = s1 + s2 + s3;
    let p = peri_m / 2;
    let area = p * (p - s1) * (p - s2) * (p - s3);
    let final_area = Math.sqrt(area).toFixed(2);
    console.log("Area of the three sided triangle is :- ", final_area);
    return final_area;
  }
  
  AOT(5, 6, 7);
  