import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const stats = t('successStories.stats', { returnObjects: true }) as { value: string; label: string }[];

  // Generate all 42 review cards with their data
  const generateReviewCards = () => {
    const reviews = [
      {
        id: 1,
        name: "Somya Chaudhary",
        reviews: 2,
        time: "1 week ago",
        story: "I had a great experience with Dr. Deepa Singh. She's very professional and caring. Their treatment helped me recover quickly with clear guidance and personal attention. The clinic is clean, well-equipped, and appointments are well-managed. Highly recommend for anyone needing expert physiotherapy support.",
        rating: 5
      },
      {
        id: 2,
        name: "Sushil Kumar",
        reviews: 2,
        time: "2 weeks ago",
        story: "Dr Deepa diagnosed my back pain well and gave me treatment. I am very grateful to her. My friend recommended me for a visit, but due to her knowledge of physiotherapy, I took complete treatment from her. Today I am completely cured from the back pain. I will also recommend her to my friends. Her staff is also very skilled and experienced under her guidance. Thank you madam.",
        rating: 5
      },
      {
        id: 3,
        name: "Abhishek Kumar",
        reviews: 2,
        time: "1 month ago",
        story: "I had an excellent experience at the Neuro Rehab & Physiotherapy Center. Dr. Deepa and her team is highly professional, caring, and dedicated to patient recovery. The facility is well-equipped, clean, and welcoming, creating a comfortable environment for healing. I highly recommend the Neuro Rehab & Physiotherapy Center to anyone seeking expert care and compassionate support.",
        rating: 5
      },
      {
        id: 4,
        name: "Monu Arya",
        reviews: 1,
        time: "2 weeks ago",
        story: "Very good environment service is excellent staff are well trained and very polite spacially pooja mai and deepa mam they helped me a lot. thanks for curing my enjury",
        rating: 5
      },
      {
        id: 5,
        name: "Khushi Ansari",
        reviews: 1,
        time: "1 month ago",
        story: "Very helpful and high professional...I had a great experience at neuro rehab and physiotherapy centre. Got solutions and remedies to my problems with great care, thank you so much",
        rating: 5
      },
      {
        id: 6,
        name: "Govinds Digari",
        reviews: 4,
        time: "7 months ago",
        story: "Dr. Deepa is amazing, I had severe headache issue, I have been visiting doctors from last six months, no one was able to figure out root cause. Dr. Deepa diagnosed my problem on my first visit. I am completely fit and fine within 4 days of treatment. Thank you ma'am",
        rating: 5
      },
      {
        id: 7,
        name: "Shivam Sharma",
        reviews: 2,
        time: "1 year ago",
        story: "My experience at Neuro Rehab & Physiotherapy Center was outstanding. Dr. Deepa and her team provided exceptional care for my mother's back problem. Dr. Deepa's kindness and expertise made all the difference in her recovery. The staff is professional and compassionate. Highly recommend this center for anyone in need of neurological rehabilitation or physiotherapy services. Thank you, Dr. Deepa and team!",
        rating: 5
      },
      {
        id: 8,
        name: "RAJNI",
        reviews: 17,
        time: "1 year ago",
        story: "I have been getting treatment here for 15 days. Deepa ma'am, with her assistance, has supported me very well and helped me to recover. Probably no one else heals the patient with as much love as she does. One of the best therapy center in mayur vihar phase 3.",
        rating: 5
      },
      {
        id: 9,
        name: "Sunita Javed",
        reviews: 5,
        time: "3 years ago",
        story: "My experience was great. They really helped us they cured my daughter's compressed leg nerve, we went to a lot of places but couldn't find something which was really helpful but when we went to them they cured it completely and their physiotherapy have almost completely cured my survical problem. They are really friendly and give all their patients a home like atmosphere. I would totally recommend everyone to go there. Totally worth it.",
        rating: 5
      },
      {
        id: 10,
        name: "Rajnish Bhardwaj",
        reviews: 5,
        time: "3 years ago",
        story: "I have been visiting Neuro rehab centre for 2 years for my wife's physiotherapy and the results are awesome. Doctor Deepa is magnificent in her knowledge and solution findings. Her advice is completely accurate and she is empathetic with her patients with a very friendly behaviour. Her intern Pooja is also a capable assistant and takes care of her patients with same energy as doctor Deepa does. I highly recommend this clinic as this is the only place with a neuro physiotherapist with deep knowledge and pain management with very less cost as compared to other centres. Having a capable Neuro physiotherapist in our locality is a boon.",
        rating: 5
      },
      {
        id: 11,
        name: "MINIKUTTY JAMES",
        reviews: 1,
        time: "1 year ago",
        story: "My experience at Neuro Rehab & Physiotherapy Center was excellent and my Frozen shoulder condition really improved by attending Dr Deepa's session.",
        rating: 5
      },
      {
        id: 12,
        name: "AASHISH KUMAR",
        reviews: 4,
        time: "2 years ago",
        story: "Best physiotherapy center in Mayur vihar phase 3. Dr Deepa has a nice way of handling the patients. She is so professional in her work she has nice and polite way of talking to her patients.",
        rating: 5
      },
      {
        id: 13,
        name: "Lakshmi Govindarajan",
        reviews: 3,
        time: "3 years ago",
        story: "Neuro Rehab physiotherapy center is a great place with really good Dr Deepa. I came here for slip disc tissue problem my both thighs was numb. Now I am feeling better. Very nice and friendly environment, great service definitely would recommend everyone.",
        rating: 5
      },
      {
        id: 14,
        name: "Om Shub",
        reviews: 1,
        time: "1 year ago",
        story: "I am Arti Awasthi, It is a right place if u have any ortho problem or any pain in your body....Dr Deepa is an amazing doctor ....actually she is full of knowledge nd experience....whenever I feel pain I get proper relaxed over here ....I thought there is magic in her hands.I am connected with her as a patient from past 10 years.I m fully satisfied from her treatment.",
        rating: 5
      },
      {
        id: 15,
        name: "Gunjan Sharma",
        reviews: 5,
        time: "3 years ago",
        story: "Best clinic to get rid of your pain. I really want to thank Dr. Deepa who helped me in my recovery. It's more than the clinic. Quite homely enviornment. Dr Deepa not only just listen or understand your problem but work very hard to get her patients recovered. Highly recommended.",
        rating: 5
      },
      {
        id: 16,
        name: "R. Sudharshan",
        reviews: 2,
        time: "2 years ago",
        story: "I had an amazing experience in the centre. I went to the centre for my back pain with which i was struggling for months. Now i am fine with no back pain, all because of the doctor and other staffs who kept on motivating me to get better. The hospitality was very impressive.",
        rating: 5
      },
      {
        id: 17,
        name: "Deepak Kumar",
        reviews: 2,
        time: "3 years ago",
        story: "I highly recommend for all physiotherapy treatment. Treatment with excellent knowledge and care. Experienced and well qualified doctor and staff. Ek baar jrur treatment le agar aapko physiotherapy required hai to.. Under supervision of Dr. Deepa i got heal from \"Bells Palsy\" within 8 days of treatment only.",
        rating: 5
      },
      {
        id: 18,
        name: "Aditya Verma",
        reviews: 2,
        time: "11 months ago",
        story: "Having a wider knowledge and perfection in its working and treat patients very well best physiotherapy doctor",
        rating: 5
      },
      {
        id: 19,
        name: "Babita Gautam",
        reviews: 1,
        time: "3 years ago",
        story: "My sister was suffering from disc prolapse pain and orthopaedic surgeon suggested surgery. someone told us about Dr Deepa Singh that she is very expert to handle this condition then we came to this center .we were surprised to see result ..within 30days she was absolutely fine......no words for Dr Deepa amazing Dr.🙏",
        rating: 5
      },
      {
        id: 20,
        name: "Kirti Verma",
        reviews: 9,
        time: "3 years ago",
        story: "Dr Deepa Singh has fantastic knowledge of her subject and her attitude towards her work is even better...takes great care of her patients...",
        rating: 5
      },
      {
        id: 21,
        name: "Ankit Sharma",
        reviews: 4,
        time: "3 years ago",
        story: "I was suffering from disc bulge which caused nerve compression.My hand and face was getting numb and there was extreme pain in my neck. I met with Dr Deepa, she listened my every problem and within 10 days i was back to normal. I highly recommend to visit this place for the people who are in pain and need physiotherapy.",
        rating: 5
      },
      {
        id: 22,
        name: "Raman Mishra",
        reviews: 8,
        time: "2 years ago",
        story: "I have never seen such kind of polite and professional people in my life.Dr Deepa ji is really a talented and expert doctor in this field.i recommend her to every one who is in need of this kind of service.Gud luck.",
        rating: 5
      },
      {
        id: 23,
        name: "Kaushal Kumar Thakur",
        reviews: 1,
        time: "3 years ago",
        story: "Superb care and personal service with a high level of professionalism from Deepa. Knowledgeable helpful and honest about the pros and cons of various options for treatment. Highly recommended for everyone. Thanks!",
        rating: 5
      },
      {
        id: 24,
        name: "Vikas Dubey",
        reviews: 5,
        time: "3 years ago",
        story: "Dr Deepa is really a nice person and at the same time her treatment is 100% effective as I experienced at her clinic..",
        rating: 5
      },
      {
        id: 25,
        name: "Kuldeep Singh",
        reviews: 2,
        time: "4 years ago",
        story: "Neuro Rehab & Physiotherapy Centre not a clinic its like a home treatment, Qualified, Good and Polite Doctor, clean place, All machines available for treatment well overall satisfied with treatment 👍👍👍👍",
        rating: 5
      },
      {
        id: 26,
        name: "Indu Sharma",
        reviews: 5,
        time: "4 years ago",
        story: "Best place for physiotherapy at economical price. The doctor was so helpful and polite, had good experience",
        rating: 5
      },
      {
        id: 27,
        name: "Ankur Gupta",
        reviews: 2,
        time: "3 years ago",
        story: "Very humble and polite doctor. Has great experience and treats well. Excellent Dr. Deepa",
        rating: 5
      },
      {
        id: 28,
        name: "Arvind Kumar",
        reviews: 3,
        time: "2 years ago",
        story: "Best physiotherapy centre in East Delhi ... Supportive staff and friendly Doctor ....",
        rating: 5
      },
      {
        id: 29,
        name: "Parveen Gautam",
        reviews: 1,
        time: "3 years ago",
        story: "Dr Deepa 🧑‍⚕️is very good person 😊she feels the pain of her pateints .She gives always good opinion and always take care🏥 with heart ♥️and soul😇.",
        rating: 5
      },
      {
        id: 30,
        name: "Ram",
        reviews: 4,
        time: "7 months ago",
        story: "Best place for physiotherapy at valuable price",
        rating: 5
      },
      {
        id: 31,
        name: "Meenakshi Sharma",
        reviews: 6,
        time: "3 years ago",
        story: "Best physoio doctor.. Very sweet and polite. Takes care of patients with empathy.",
        rating: 5
      },
      {
        id: 32,
        name: "Shaifali Srivastava",
        reviews: 5,
        time: "2 years ago",
        story: "Available at one call always, and brief the things in details When I went there i was in doubt but all my doubts went vein after 2, 3 visits I was more confident day by day and it resolved at my problems",
        rating: 5
      },
      {
        id: 33,
        name: "Namrata Thakur",
        reviews: 2,
        time: "4 years ago",
        story: "Good clinic and Dr. Deepa is one of the best physio in the area.",
        rating: 5
      },
      {
        id: 34,
        name: "EMMANUEL MASIH",
        reviews: 4,
        time: "4 years ago",
        story: "This is one of the best centre I must say.plz come and take advance treatment for pain free life.",
        rating: 5
      },
      {
        id: 35,
        name: "Priya Shekhar",
        reviews: 6,
        time: "3 years ago",
        story: "I would 100% recomend the clinic to any of my friends and family. Very friendly Doc.",
        rating: 5
      },
      {
        id: 36,
        name: "Vyanjan Van",
        reviews: 3,
        time: "2 years ago",
        story: "Very good doctor. I have a good experience ☺️",
        rating: 5
      },
      {
        id: 37,
        name: "Sushma Dinesh",
        reviews: 5,
        time: "4 years ago",
        story: "Neuro Rehab & Physiotherapy clinic is one of the best clinic in Mayur Vihar.",
        rating: 5
      },
      {
        id: 38,
        name: "Shubham Jain",
        reviews: 6,
        time: "2 years ago",
        story: "Nice physiotherapist, quick recovery within few days",
        rating: 5
      },
      {
        id: 39,
        name: "Pradeep Kaushik",
        reviews: 2,
        time: "2 years ago",
        story: "Good behaviour and very good place for physiotherapy",
        rating: 5
      },
      {
        id: 40,
        name: "Diwakar Mani",
        reviews: 3,
        time: "3 years ago",
        story: "I have recovered from chronic illness by treatment of Dr Deepa",
        rating: 5
      },
      {
        id: 41,
        name: "Sunil Yadav",
        reviews: 2,
        time: "4 years ago",
        story: "Very good and well behaviour doctor",
        rating: 5
      },
      {
        id: 42,
        name: "Deepak Gupta",
        reviews: 4,
        time: "1 year ago",
        story: "Awesome 👍 treatment …",
        rating: 5
      }
    ];
    return reviews;
  };

  const reviewCards = generateReviewCards();

  return (
    <section id="testimonials" className="py-20 bg-[#F4EEDF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47624F] mb-4">{t('successStories.heading')}</h2>
          <p className="text-xl text-[#3F5C4B] max-w-3xl mx-auto">
            {t('successStories.description')}
          </p>
        </div>

        <div className="mt-16 bg-[#47624F] border border-[#F4EEDF]/20 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-[#F4EEDF] mb-2">{stat.value}</div>
                <div className="text-[#F4EEDF]/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontally scrollable cards section with auto-scroll */}
        <div className="mt-16 space-y-6">
          {/* First row (previously third) */}
          <div className="group relative overflow-hidden">
            <div className="flex space-x-6 animate-scroll-fastest group-hover:[animation-play-state:paused]">
              {/* First set of cards */}
              {reviewCards.slice(28, 42).map((card) => (
                <div
                  key={`row1-${card.id}`}
                  className="flex-none w-80 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#F4EEDF] hover:border-[#F4A259]"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F4A259] rounded-full flex items-center justify-center text-white text-lg font-bold mr-4 hover:[animation-play-state:paused]">
                      {card.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#47624F] hover:[animation-play-state:paused]">{card.name}</h3>
                      <p className="text-sm text-[#3F5C4B] hover:[animation-play-state:paused]">{card.reviews} reviews</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#3F5C4B] mb-4 leading-relaxed">
                    {card.story}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(card.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#F4A259] fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-[#3F5C4B] font-medium hover:[animation-play-state:paused]">
                      {card.time}
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set of cards for seamless looping */}
              {reviewCards.slice(28, 42).map((card) => (
                <div
                  key={`row1-duplicate-${card.id}`}
                  className="flex-none w-80 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#F4EEDF] hover:border-[#F4A259]"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F4A259] rounded-full flex items-center justify-center text-white text-lg font-bold mr-4 hover:[animation-play-state:paused]">
                      {card.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#47624F] hover:[animation-play-state:paused]">{card.name}</h3>
                      <p className="text-sm text-[#3F5C4B] hover:[animation-play-state:paused]">{card.reviews} reviews</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#3F5C4B] mb-4 leading-relaxed">
                    {card.story}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(card.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#F4A259] fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-[#3F5C4B] font-medium hover:[animation-play-state:paused]">
                      {card.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row (unchanged) */}
          <div className="group relative overflow-hidden">
            <div className="flex space-x-6 animate-scroll-faster group-hover:[animation-play-state:paused]">
              {/* First set of cards */}
              {reviewCards.slice(14, 28).map((card) => (
                <div
                  key={`row2-${card.id}`}
                  className="flex-none w-80 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#F4EEDF] hover:border-[#F4A259]"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F4A259] rounded-full flex items-center justify-center text-white text-lg font-bold mr-4 hover:[animation-play-state:paused]">
                      {card.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#47624F] hover:[animation-play-state:paused]">{card.name}</h3>
                      <p className="text-sm text-[#3F5C4B] hover:[animation-play-state:paused]">{card.reviews} reviews</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#3F5C4B] mb-4 leading-relaxed">
                    {card.story}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(card.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#F4A259] fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-[#3F5C4B] font-medium hover:[animation-play-state:paused]">
                      {card.time}
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set of cards for seamless looping */}
              {reviewCards.slice(14, 28).map((card) => (
                <div
                  key={`row2-duplicate-${card.id}`}
                  className="flex-none w-80 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#F4EEDF] hover:border-[#F4A259]"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F4A259] rounded-full flex items-center justify-center text-white text-lg font-bold mr-4 hover:[animation-play-state:paused]">
                      {card.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#47624F] hover:[animation-play-state:paused]">{card.name}</h3>
                      <p className="text-sm text-[#3F5C4B] hover:[animation-play-state:paused]">{card.reviews} reviews</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#3F5C4B] mb-4 leading-relaxed">
                    {card.story}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(card.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#F4A259] fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-[#3F5C4B] font-medium hover:[animation-play-state:paused]">
                      {card.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third row (previously first) */}
          <div className="group relative overflow-hidden">
            <div className="flex space-x-6 animate-scroll group-hover:[animation-play-state:paused]">
              {/* First set of cards */}
              {reviewCards.slice(0, 14).map((card) => (
                <div
                  key={`row3-${card.id}`}
                  className="flex-none w-80 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#F4EEDF] hover:border-[#F4A259]"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F4A259] rounded-full flex items-center justify-center text-white text-lg font-bold mr-4 hover:[animation-play-state:paused]">
                      {card.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#47624F] hover:[animation-play-state:paused]">{card.name}</h3>
                      <p className="text-sm text-[#3F5C4B] hover:[animation-play-state:paused]">{card.reviews} reviews</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#3F5C4B] mb-4 leading-relaxed">
                    {card.story}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(card.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#F4A259] fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-[#3F5C4B] font-medium hover:[animation-play-state:paused]">
                      {card.time}
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set of cards for seamless looping */}
              {reviewCards.slice(0, 14).map((card) => (
                <div
                  key={`row3-duplicate-${card.id}`}
                  className="flex-none w-80 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#F4EEDF] hover:border-[#F4A259]"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F4A259] rounded-full flex items-center justify-center text-white text-lg font-bold mr-4 hover:[animation-play-state:paused]">
                      {card.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#47624F] hover:[animation-play-state:paused]">{card.name}</h3>
                      <p className="text-sm text-[#3F5C4B] hover:[animation-play-state:paused]">{card.reviews} reviews</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#3F5C4B] mb-4 leading-relaxed">
                    {card.story}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(card.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#F4A259] fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-[#3F5C4B] font-medium hover:[animation-play-state:paused]">
                      {card.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[#3F5C4B] mb-6">
            Join thousands of patients who have successfully recovered with our help
          </p>
          <button className="bg-[#F4A259] text-white px-8 py-3 rounded-lg hover:bg-[#F4A259]/90 transition-colors font-medium">
            Start Your Recovery Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;