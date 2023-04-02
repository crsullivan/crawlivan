import React from 'react';
import './FAQ.css';

function FAQ() {

    var LodgingLink = <a href={('https://www.arizonanordicvillage.com/front-country-yurts-and-cabins')}>here</a>

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>What is the Task Registry?</h3>
                <div className='faq-answers'>
                    <p className='answer'>If you are registered with a task, we will coordinate with you 2-4 weeks prior to the wedding date. For those of you that are registered, if you have any specific, preliminary questions, we are happy to answer them to the best of our ability ahead of time</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Can I take pictures?</h3>
                <div className='faq-answers'>
                    <p className='answer'>We ask that everyone keep their phones silenced or off, and put away during the ceremony. However, feel free to take as many pictures as you want before or after the ceremony.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Will you be accomodating dietary restrictions?</h3>
                <div className='faq-answers'>
                    <p className='answer'>We will have gluten-free, nut-free, dairy-free and vegetarian friendly options.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Will there be the fun kind of drinks?</h3>
                <div className='faq-answers'>
                    <p className='answer'>We will have wine, a variety of beer, and some 'Truly' options as well. We will NOT have a bartender, as it is not required due to the location of our wedding. So, if you would like something specific, please feel free to BYOB.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>What is the weather like in Flagstaff that time of year?</h3>
                <div className='faq-answers'>
                    <p className='answer'>Flagstaff should be beautiful in mid-September for our wedding, it is one of the factors we wanted to account for. However, Flagstaff is still a mountain town in Arizona, so it is subject to rapid, unforeseen shifts in weather. We expect daily high temperatures from 75°F to 68°F, rarely falling below 60°F or exceeding 81°F. We expect daily low temperatures from 49°F to 39°F, rarely falling below 31°F or exceeding 55°F, depending on how late you want to stay for post-wedding festivities, we reccomend preparing for temperatures as low as freezing, just in case!</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>What kind of accomodations do you have?</h3>
                <div className='faq-answers'>
                    <p className='answer'>We have four cabins and three yurts available for our guests free of charge, and they are first come first serve. Keep in mind these are pretty rustic. You can find their details {LodgingLink}, we will provide sheets and blankets, but don't forget your pillow! There is also quite a bit of room for camping. Please keep in mind that we will be 15-20 minutes outside of Flagsatff, there is no shuttle, and Uber/Lyft does not service the area, so relax responsibly, or plan to stay the night.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Can I bring a plus one?</h3>
                <div className='faq-answers'>
                    <p className='answer'>If you got one on your invite, then yes!</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>What if it rains?</h3>
                <div className='faq-answers'>
                    <p className='answer'>If it rains, then be prepared to get wet and muddy! All jokes aside, if it does rain we will move everything into the large enclosed 'tent' or yurt.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>What if there is a forest fire?</h3>
                <div className='faq-answers'>
                    <p className='answer'>While our wedding is planned towards the end of fire season, this is still a possibility, and obviously a really big deal. If there is a forest fire in the area, then the venue and the surrounding area will be closed, and the wedding will be recheduled entirely. Keep in mind that there may be prescribed burns in and/or around the Flagstaff area this time of year, so you may see or smell occaisonal smoke while we are there.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Where is the rehearsal dinner?</h3>
                <div className='faq-answers'>
                    <p className='answer'>We will have this question answered before the end of May.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Will we have a campfire?</h3>
                <div className='faq-answers'>
                    <p className='answer'>Yes! However, due to liability issues, it is the responsibility of the venue to start and maintain it. Do NOT maintain or change the fire in any way.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Can I smoke?</h3>
                <div className='faq-answers'>
                    <p className='answer'>This is a forest venue in Arizona, so there is a designated area that we will make clear in the parking section that you can smoke whatever you want in. Regardless, be VERY careful if you do smoke, and ensure you put it out fully.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Do you really expect me to go to the bathroom in the woods?</h3>
                <div className='faq-answers'>
                    <p className='answer'>Ok, we arent't THAT remote! Worry not, there will be two full bathrooms in the lodge, and we are renting a bathroom trailer with three or more individual bathrooms. People who choose to stay overnight can shower there in the morning, as long as you arer out by 10AM.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Kids?</h3>
                <div className='faq-answers'>
                    <p className='answer'>We would like to keep this an adult-only party. But we have good reason. We will be surrounded by a dark, open forest, with potential hazards, wild animals, a bonfire and no surrounding fence or markers. We really want our guests who are parents to be able to take a little break from parenting, and to not worry about anything while they are with us. This being said, if this doesn't work for you, of course we understand and we will do our best to accomodate.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Can we take guest table centerpieces?</h3>
                <div className='faq-answers'>
                    <p className='answer'>Please take any books you are interested in reading. We love books, and bought/selected these specifically as favors to our guests. However, if you are interested in any of the flowers or decor, please ask us first!</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>Itinerary</h3>
                <div className='faq-answers'>
                    <p className='answer'>10 AM - Wedding party meet up at venue to begin set up.</p>
                    <p className='answer'>1 PM - Lunch for wedding party.</p>
                    <p className='answer'>4:30 PM - Ceremony</p>
                    <p className='answer'>5:30 PM - Happy hour with salsa bar</p>
                    <p className='answer'>6:30 PM - First dance.</p>
                    <p className='answer'>6:40 PM - Dinner.</p>
                    <p className='answer'>7:10 PM - Bride and Groom to begin visiting with tables.</p>
                    <p className='answer'>7:30 PM - Bride and Groom 'song photos' with each table.</p>
                    <p className='answer'>7:45 PM - Shoe Game.</p>
                    <p className='answer'>8:00 PM - Dancing, partying, lawn games and bonfire.</p>
                    <p className='answer'>8:15 PM - Donuts and S'mores, this effectively our cake cutting if you didn't want to miss that!.</p>
                    <p className='answer'>10:30 PM - Last Dance.</p>
                </div>
            </div>
            <div className='faq-content-boxes'>
                <h3 className='faq-questions'>If you have questions not listed here, please email crawlivan@protonmail.com at least two weeks prior to the wedding date.</h3>
            </div>
        </div>
    )
  }
  
  export default FAQ;