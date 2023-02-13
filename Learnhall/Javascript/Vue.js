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

var steps = [
    {
        "img1" : "images/orange-circle.png",
        "img2" : "images/1.png",
        "title" : "Step One",
        "text" : "Inquire about our tutoring services by filling-out and submitting the 'Book a Session' form."
    },
    {
        "img1" : "images/blue-circle.png",
        "img2" : "images/2.png",
        "title" : "Step Two",
        "text" : "Within 24 hours an advisor will contact you to go over the student's tutoring goals & needs."
    },
    {
        "img1" : "images/brown-circle.png",
        "img2" : "images/3.png",
        "title" : "Step Three",
        "text" : "The advisor will find an ideal tutor match and set up a free session to ensure he/she is the right fit."
    }
]


const Bio = {
    data(){
        return{
            components: window.components,
            steps: window.steps
        }
    }
};


Vue.createApp(Bio).mount("#App")