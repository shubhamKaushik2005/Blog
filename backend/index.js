const express = require('express')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

let data = [
    {
        "id": 1,
        "src": "/images/z4.jpg",
        "heading": "How two young dreamers built a crowd-favourite eatery in Ranchi",
        "desc": "Brothers Nishant and Vikash Ranjan had a dream—to create a space where people could come together over warm vibes while enjoying unforgettable meals. But bringing this idea to life was no easy feat!"
    },
    {
        "id": 2,
        "src": "/images/z2.jpg",
        "heading": "Espresso: Brewing PDFs at Zomato, Faster Than You Can Say “Cappuccino”",
        "desc": "At Zomato, we love food and we love data. And sometimes, those two passions collide in the creation of beautiful, portable, and secure PDFs. From invoices and receipts to detailed reports, PDFs are a cornerstone of our operations and a staple across the industry. However, our existing PDF generation process, powered by a PHP-based library, was starting to show its age. We encountered latency issues, especially during the peak hours and the situation worsened with complex, multi-page PDFs that included significant graphical content."
    },
    {
        "id": 3,
        "src": "/images/z3.jpg",
        "heading": "BDosas and decades of deliciousness: The Shri Ganesh Bhavan story",
        "desc": "Mr. PG Shanmugam made a big shift in 1989, leaving the oil and ice industries behind to focus solely on launching Shri Ganesh Bhavan in T Nagar, Chennai."
    },
    {
        "id": 4,
        "src": "/images/z1.jpg",
        "heading": "Idli, spice, and everything niceMysore Raman Idlis journey to success!",
        "desc": "Sandeep K. Mohan began his journey in the restaurant world with a passion for South Indian cuisine. For 12 years, he worked in Star Hospitality, building his skills as a chef and sharing his knowledge as a hotel consultant. At the same time, he supplied raw materials to star hotels, steadily building his career in the hospitality industry."
    },
    {
        "id": 5,
        "src": "/images/z8.jpg",
        "heading": "Q3FY25 shareholders letter and results",
        "desc": "A quick capture of headline results from this quarter"
    },
    {
        "id": 6,
        "src": "/images/z7.jpg",
        "heading": "The Big Brand Theory | Carving a spice trail from Tamil Nadu to 5+ countries",
        "desc": "Dindigul Thalappakatti (previously Ananda Vilas Biriyani Hotel) was established in 1957 by Mr. Nagaswami Naidu in Dindigul,"
    },
    {
        "id": 7,
        "src": "/images/z6.jpg",
        "heading": "The Big Brand Theory | From trekking Himalayan slopes to raising Rs. 0.75 crores at Shark Tank: The story of Amore Gelato ",
        "desc": "Founded in 2006 by Yasser Ali and Nayyer Hussain, Amore Gelato brings a freshly crafted range of delicious Italian gelatos to India! With the mission to make premium gelato affordable for everyone, the brand has flourished over the years. Once a 100 square feet outlet in Bandra, Mumbai, it has now expanded to 30+ outlets across key Indian cities like Mumbai, Hyderabad, and Pune."
    },
    {
        "id": 8,
        "src": "/images/z5.jpg",
        "heading": "Introducing Zomatos Plastic-Free Future Program for Restaurant Partners",
        "desc": "In the last few years, we have undertaken multiple initiatives to reduce the impact of packaging used by restaurants for food deliveries on the environment including giving customers the option to opt out of receiving cutlery and recycling more plastic waste than restaurants use for deliveries."
    },
    {
        "id": 9,
        "src": "/images/z10.jpg",
        "heading": "The Big Brand Theory | From piano melodies to Chinese recipes: The Chowman Story",
        "desc": "Chowman was established in 2010 by Debaditya Chaudhary, a business management professional with a strong passion for food, travel, and music. His diverse experiences and interests paved the way for the creation of the brand."
    },
    {
        "id": 10,
        "src": "/images/z11.jpg",
        "heading": "Apache Flink Journey @Zomato: From Inception to Innovation",
        "desc": "Our journey into real-time data processing began with a clear objective: to align our data capabilities with the operational demands of a fast-paced, dynamic business. Traditional batch processing systems"
    },
    {
        "id": 11,
        "src": "/images/z9.jpg",
        "heading": "The Big Brand Theory | How Mas recipes ended up building one of Indias leading Burmese specialty cuisine brands",
        "desc": "Burma Burma stands out as Indias only specialty Burmese restaurant and tea room offering a culinary experience inspired by the streets and homes of Burma (now Myanmar). Established by Ankit Gupta and Chirag Chhajer in 2014"
    },
    {
        "id": 12,
        "src": "/images/z12.jpg",
        "heading": "Food Rescue: An initiative to minimize food wastage",
        "desc": "Every month, around 4 lakh perfectly good orders on their way to the customers are canceled on Zomato. Its a serious challenge and we have been working on possible solutions to reduce this food wastage."
    },
    {
        "id": 13,
        "src": "/images/z13.jpg",
        "heading": "Plan ahead with Zomatos Order Scheduling feature: Convenience at your fingertips",
        "desc": "At Zomato, our endeavor is to make the food ordering experience seamless and hassle-free. While we strive to consistently have your food delivered as quickly as possible, we understand that sometimes, you may want to plan your order in advance. Whether its for a special occasion, a group lunch at the office, or your daily caffeine fix, planning when your food arrives just got easier."
    },
    {
        "id": 14,
        "src": "/images/z15.jpg",
        "heading": "Zomato Collaborates With IRCTC | Live across 111 cities",
        "desc": "Zomato is revolutionizing train travel with its latest offering  Zomato  Food Delivery in Trains, an enticing collaboration with IRCTC e-catering services. With this collaboration, Zomato is making strides towards"
    },
    {
        "id": 15,
        "src": "/images/z16.jpg",
        "heading": "Q2FY25 shareholders letter and results",
        "desc": "Sustained topline growth momentum with 58% YoY Adjusted Revenue Growth, above the stated outlook of 40% YoY growth."
    },
    {
        "id": 16,
        "src": "/images/z14.jpg",
        "heading": "Delivery Partner Well-being  Introducing a framework to guide our efforts",
        "desc": "At Zomato, the well-being of the delivery partners is the cornerstone of our commitment to create a sustainable, responsible and inclusive business."
    },
    {
        "id": 17,
        "src": "/images/z17.jpg",
        "heading": "The Big Brand Theory | Freshness, flavour and innovation. That’s Bakingo!",
        "desc": "The inception of Bakingo is a tale of foresight and ambition shared by three engineering friends—Shrey Sehgal, Himanshu Chawla, and Suman Patra. As passionate foodies, they felt that their sweet cravings were never fully satisfied."
    },
    {
        "id": 18,
        "src": "/images/z18.jpg",
        "heading": "Setting up new restaurants on Zomato is simpler and faster now!",
        "desc": "For first-time and seasoned food entrepreneurs, the first few days of starting a restaurant holds special importance. A quick ramp up in business helps get many things in order and gives a sense of comfort that every entrepreneur needs."
    },
    {
        "id": 19,
        "src": "/images/z19.jpg",
        "heading": "Farewell Akriti",
        "desc": "She walked into our office, not knowing who she would meet, what she would do, or where the journey would lead. What began as a spontaneous afternoon in 2011, soon became one of the most pivotal moments at Zomato—the day I met Akriti Chopra."
    },
    {
        "id": 20,
        "src": "/images/z20.jpg",
        "heading": "Fighting together against fraudulent ticketing websites and individuals",
        "desc": "Whilst we are absolutely thrilled by the success of the Diljit Dosanjh Dil-Luminati Tour it has come to our attention that fake tickets for Diljit Dosanjh’s Dil-lumanati Tour in India are being sold by unauthorized individuals and on fake websites. We are incredibly disheartened by these attempts to fraud genuine fans out of an opportunity to attend the tour."
    },
    {
        "id": 21,
        "src": "/images/z21.jpg",
        "heading": "The Big Brand Theory | A scoop of Naturals: How a fruit seller’s legacy created an iconic brand",
        "desc": "Starting as a small eatery in Juhu in 1984, Naturals soon blossomed into a treasured ice cream parlor known for its commitment to authentic, fruit-based flavors."
    },
    {
        "id": 22,
        "src": "/images/z22.jpg",
        "heading": "Introducing POS developer platform: Simplifying integration with easy-to-use tools",
        "desc": "For restaurants, the choice of POS system is critical. POS players differ in terms of feature availability, speed of building new features, tech stability and scalability. POS systems also play a crucial role in ensuring smooth order processing and operations management."
    },
    {
        "id": 23,
        "src": "/images/z23.jpg",
        "heading": "Book Now, Sell Later",
        "desc": "We understand – plans change! There are a lot of unknowns when booking a ticket so far in advance:"
    },
    {
        "id": 24,
        "src": "/images/z24.jpg",
        "heading": "The Big Brand Theory | How this brand set on a mission to samosa-fy the world!",
        "desc": "Samosa Party was born out of a passion to elevate Indian ethnic snacking to a whole new level. "
    },
    {
        "id": 25,
        "src": "/images/z25.jpg",
        "heading": "Migrating to VictoriaMetrics: A complete overhaul for enhanced observability",
        "desc": "At Zomato, ensuring the reliability of our systems is paramount, as any downtime can affect millions of customers using our services."
    },
    {
        "id": 26,
        "src": "/images/z26.jpg",
        "heading": "Q1FY25 shareholders’ letter and results",
        "desc": "Year-on-year topline (Adjusted Revenue) growth steady at 62% (61% in the previous quarter) and continues to trend above the stated outlook of 40%+."
    },
    {
        "id": 27,
        "src": "/images/z27.jpg",
        "heading": "Go Beyond: Building Performant and Reliable Golang Applications",
        "desc": "Imagine this: you’re in a war room atmosphere. Tension hangs thick in the air as your application team and you scramble to debug a sudden spike in OOM"
    },
    {
        "id": 28,
        "src": "/images/z28.jpg",
        "heading": "Zomato Restaurant Awards 2024: Celebrating customers’ favourite restaurants in the industry",
        "desc": "The Zomato Restaurant Awards have been our way of giving a platform to our customers to recognize and celebrate their favorite restaurants across various categories. "
    }
]


app.get('/', (req, res) => {
    res.json(data);
})

app.get('/data/:id', (req, res) => {
    const Blog = data.find(u => u.id === parseInt(req.params.id));
    Blog ? res.json(Blog) : res.status(404).send('User not found');
});

app.post('/', (req, res) => {
    data.push({ id: req.body.id, src: req.body.src, heading: req.body.heading, desc: req.body.desc, price: req.body.price })
    res.send('record successfuly added!');
})

app.put('/data/:id', (req, res) => {
    const blog = data.find(u => u.id === parseInt(req.params.id));
    if (!blog) return res.status(404).send('Blog not found');

    blog.src = req.body.src;
    blog.heading = req.body.heading;
    blog.desc = req.body.desc;

    res.json(blog); 
});


app.delete('/data/:id', (req, res) => {
    data = data.filter(u => u.id !== parseInt(req.params.id));
    res.send('this is delete req');
})

app.listen(port, () => console.log(`server running on port ${port}`));