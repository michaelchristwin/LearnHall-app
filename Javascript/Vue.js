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
];

var lets_connect = [
    {
        "img1" : "images/white-circle.png",
        "img2" : "images/facebook.png",
        "link" : "https://www.facebook.com/learnhalltutoring/"
    },
    {
        "img1" : "images/white-circle.png",
        "img2" : "images/instagram.png",
        "link" : "https://www.instagram.com/learnhalltutoring/"
    },
    {
        "img1" : "images/white-circle.png",
        "img2" : "images/twitter.png",
        "link" : "https://twitter.com/learnhall"
    },
];

var Contact_Us = [
    {
        "img1" : "images/white-circle.png",
        "img2" : "images/phone-blue.png",
        "link" : "tel:503-342-7214"
    },
    {
        "img1" : "images/white-circle.png",
        "img2" : "images/email.png",
        "img3" : "images/box.png",
        "link" : "mailto:info@learnhall.com"
    },
]

var parents_reviews = [
    {
        "img" : "images/parent-mdl.jpg",
        "name" : "Kim K.",
        "num_of_starts" : "5",
        "text" : "Thanks to the encouraging and fun atmosphere Mike creates around math, my kid has gone from absolute dread and tears to believing in himself. I never thought I'd see him laughing and cheering",
        "more_text": "for my son. I am blessed to have found this company that is run by someone so compassionate and serious about seeing other people's children succeed. My son worked with val and he adores her! My son opened up to her right away. She's young, energetic, & knows how to engage with him to get him to open up, & it's wonderful to see him finally enjoying the learning experince becouse she is both a good teacher and a fun teacher and it has made all the difference."
    },
    {
        "img" : "images/parent-mdl.jpg",
        "name" : "Bill D.",
        "num_of_starts" : "5",
        "text" : "Now I can personally verify and attest to why Mike gets 5 star reviews. I've observed my child learning with him, and he just seems to have a natural ability to guide a student to the best",
        "more_text": "learning space for them. He gives them the confidence and enthusiasm, and helps to impart the skills that help them access their own inner intelligence. It's a rare skill. Thank you Mike!"
    },
    {
        "img" : "images/parent-mdl.jpg",
        "name" : "Julie S.",
        "num_of_starts" : "5",
        "text" : "Mike listened to us and helped us target our child's specific needs. He was willing to take us on, even though my kid has special needs and needed plenty of patience. Mike had that for us",
        "more_text": ", and he has been vary pleasent to work with, tweaking his approach and fine tunning things from time to tome. He has been an encouragement to us and we appreciate the consistent help he has been."
    },
    
    
]



const Bio = {
    data(){
        return{
            components: window.components,
            steps: window.steps,
            letsConnect : window.lets_connect,
            contactUs : Contact_Us,
            parentsReview : parents_reviews
        }
    }
};


Vue.createApp(Bio).mount("#App")