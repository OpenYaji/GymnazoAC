import React from 'react';
import a1 from '../../assets/img/a1.png';
import a2 from '../../assets/img/a2.png';
import a3 from '../../assets/img/a3.png';
import a4 from '../../assets/img/a4.png';

import SpotlightCard from '../ui/SpotlightCard';

const UpdatesSection = () => {
  const cardBg = 'bg-[#]';

  const cards = [
    {
      icon: a1,
      title: 'Biblical Foundation',
      content:
        "God centered view that all truth is God’s truth, and that the Bible is inspired and only infalliable authoritative Word of God that contains this truth.",
    },
    {
      icon: a2,
      title: 'Divine Purpose',
      content:
        'God created all things and sustains all things. Therefore, the universe and humanity are dynamically related to God and have the purpose of glorifying Him. A person can do this by choosing God’s free gift of salvation through His Son. Hereby, committing his or her life to the Lordship of Jesus Christ.',
    },
    {
      icon: a3,
      title: 'Christian Education',
      content:
        'Teachers and Administrators are responsible to understand and meet the need of their learners in terms of Christian Life Perspective and Academic Excellence.',
    },
    {
      icon: a4,
      title: 'Wholesome Environment',
      content:
        'A learning environment that is characterized by wholesome setting. Students are expected to be mindful of their actions promoting and living Christian values. Classrooms that promotes individual at cooperative learning.',
    },
  ];

  return (
    <div className="w-full relative z-20 -mt-3 px-15 pb-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="flex justify-center">
              <SpotlightCard
                className="custom-spotlight-card w-full h-full"
                spotlightColor="rgba(91, 62, 49, 1)"
              >
                <div
                  className={`p-4 rounded-lg shadow-xl text-white ${cardBg} w-full h-full flex flex-col justify-between`}
                >
                  {/* Logo/Icon */}
                  <div className="flex justify-center mb-3">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="h-10 w-10 object-contain opacity-80"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-center mb-3">
                    {card.title}
                  </h3>

                  {/* Content */}
                  <p className="text-[10px] text-center leading-snug">
                    {card.content}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatesSection;
