export default function calSize (percentage_number) {
    const disign_size = 550;
    const disign_percentage_number = 50;
    const rate = disign_size / Math.sqrt(disign_percentage_number)

    const min_percentage4size = 2.5;    
    var size = rate * Math.sqrt((Number(percentage_number) >= min_percentage4size ? Number(percentage_number) : min_percentage4size)) ;
    return Math.floor(size);
};
