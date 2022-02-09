export default function CalPos (percentages) {

    // We assume an order of percentages from server is like this:
    // .hydro-circle, .wind-circle, .solar-circle, .nonr-circle.

    var positions0 = [  { left: 300, top: 100 },
                        { left: 800, top: 300 },
                        { left: 500, top: 200 },
                        { left: 100, top: 400 }   ];

    var positions1 = [  { left: 500, top: 300 },
                        { left: 300, top: 400 },
                        { left: 100, top: 100 },
                        { left: 800, top: 200 }   ];

    var flag = Math.floor((Math.random() * 2));
    // console.log(flag);
    return flag ? positions1 : positions0;
};
