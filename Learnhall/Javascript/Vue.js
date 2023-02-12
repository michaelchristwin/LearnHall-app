var components = [
    {
        "img1" : "images/orange-circle.png",
        "img2" : "images/Diamond.png",
        "title" : "Well-Vetted Tutors",
        "text" : "Our tutors are highly qualified, passionate, and well-educated at top universities."
    },
    {
        "img1" : "images/blue-circle.png",
        "img2" : "images/arrow.png",
        "title" : "We Come to You",
        "text" : "We meet at the pupil's home or local library and we also offer online lessons."
    },
    {
        "img1" : "images/brown-circle.png",
        "img2" : "images/star.png",
        "title" : "Your Future",
        "text" : "We share knoledge that can help in all areas of life, not just the subject's we are focusing on."
    },
    {
        "img1" : "images/dark-circle.png",
        "img2" : "images/heart.png",
        "title" : "We Love Effort",
        "text" : "The 'growth mindset' is a lifelong asset. The result isn't nearly as important as the effort."
    }
];


const Bio = {
    data(){
        return{
            components: window.components
        }
    }
};


Vue.createApp(Bio).mount("#App")