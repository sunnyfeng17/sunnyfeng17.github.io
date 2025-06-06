import React from 'react';
import { Row, Col, Tag, Flex } from 'antd';
import '../css/main.scss';

interface ExperienceRowProps {
  image: string;
  position: string;
  date: string;
  company: string;
  desc: React.ReactNode;
  techskills: string[];
  softskills: string[];
}

const ExperienceRow = ({ image, position, date, company, desc, techskills, softskills }: ExperienceRowProps) => {
  return (
    <Row className='experience-row'>
      <Col span={6}>
      {image && <img src={image} className='company-logo' alt={company + ' logo'} />}      
      </Col>
      <Col span={18}>
        <h1>{position} @ {company}</h1>
        <h2>{date}</h2>
        <p>{desc}</p>
        <div>
          { techskills.length !== 0 &&
            <>
              <p>👩‍💻</p>
              <Flex wrap gap="small" className="small-gap-bottom">
                {techskills
                  .sort()
                  .map(skill => (
                    <Tag color='purple'>{skill}</Tag>
                ))}
              </Flex>
            </>
            }
          
          { softskills.length !== 0 &&
            <>
              <p>🤝</p>
              <Flex wrap gap="small">
                {softskills
                  .sort()
                  .map(skill => (
                    <Tag color='purple'>{skill}</Tag>
                ))}
              </Flex>
            </>
          }
        </div>
      </Col>
    </Row>
  );
};

export default ExperienceRow;