import {
  GridItem,
  Text,
  Center,
  Stack,
  Heading,
  Image,
  Box,
  Container,
  Avatar,
  Divider,
} from '@chakra-ui/react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import React from 'react'
import AspectHeader from './AspectHeader'
import ProjectImage from '../ProjectImage'
import ProjectCite from '../ProjectCite'
import background from '../../images/000016.jpg'
import palanque from '../../images/000020.jpg'
import mansion from '../../images/000021.png'
import court from '../../images/000022.png'
import calender from '../../images/000023.png'
import stone from '../../images/000024.png'
import home from '../../images/000025.png'
import farming from '../../images/000026.png'
import women from '../../images/000027.png'

const AspectJalaine = () => {
  return (
    <GridItem colSpan={5}>
      <AspectHeader
        title='The Maya Social Pyramid'
        subt='Classic Period Maya Social Structure'
        name='Jalaine Olks'
        color='pink'
        minread='6'
        img={background}
      />
      <Container
        width={'rem'}
        maxW={'4xl'}
        bg={'blackAlpha.20'}
        rounded={'md'}
        p={4}
      >
        <Heading size='lg' color='pink.300'>
          Introduction{' '}
        </Heading>
        The social structure of a society will determine it’s destiny. While
        often times the social structure of a society, parictualry how a society
        treats it’s working class and poor, is often times dismissed as
        something which isn’t a priority or important. However, it truly is.
        Social structure will determine the strength and stability of the
        economy, business production and warfare. One can see this through Mayan
        empire. After reading this, hopefully, the reader will understand how
        the Mayans social structure shaped it’s overall economy and society.
        <br />
        <br />
        <Heading size='lg' color='pink.600'>
          The King
        </Heading>
        The Mayan social structure was a very beaurtiatic and plutocratic one.
        At the very top of the social pyramid was the king. The king had all to
        say and lived a very luxurious lifestyle.
        <ProjectCite
          cite="Webster, David. 'The Uses and Abuses of the Anicent Maya .' PDF . Last modified , 2009."
          num={1}
        />{' '}
        Mayan Kings lived in stone palaces within the city which were either a
        part of or near temples. The palace of Palenque is a great example of
        this. It served as the residence for the legendary King Pakal the Great
        as well as many other kings below him. The king also had a multitude of
        servants to look after him and accompany his every need. The king was
        very busy ruling the Mayan empire, however occasionally he would go out
        into society and watch a sports match or indulge in theater however this
        was somewhat rare.
        <ProjectCite
          cite='Liderman, Herbert. Culture, infancy and the Human experience of Mayans. Vol. 1 . N.p.: Harper Collins, 1977 .'
          num={2}
        />
        <ProjectImage
          img={palanque}
          alt={'Palenque'}
          cite='Maya Palace of Pakal at Palenque'
        />
        <Heading size={'lg'} color='blue.600'>
          The Elites
        </Heading>
        Right below the king were the elites. These were extremely wealthy
        people who would be considered akin to modern day billionaires.
        Oftentimes government jobs were the ones which the elites had. These
        included vocations such as a priest, military leaders, farmers, scribes,
        mathematicians, astronomers, tax collectors or a slave traders.
        <ProjectCite
          cite='Tarlton Law Library . Last modified November 8, 2018 . '
          num={3}
        />
        <br /> <br />
        They still did live in large luxurious palace-like homes although they
        were not nearly as luxurious as the king’s.
        <ProjectCite
          cite='Liderman, Herbert. Culture, infancy and the Human experience of Mayans. Vol. 1 . N.p.: Harper Collins, 1977 .'
          num={4}
        />{' '}
        The elites also did have a multitude of servants and slaves to not only
        wait on their domestic needs but to also perform laborious activities
        which their jobs entailed. For example if an elite happened to be a
        farmer they would have their employees and slaves tend to the crops and
        do the laborous work while the elite’s job was mainly to sell those
        products which the farm produced.
        <ProjectCite
          cite='Tarlton Law Library . Last modified November 8, 2018 . '
          num={5}
        />
        <ProjectImage
          img={mansion}
          alt={'Elite Maya Home'}
          cite={'Elite Maya Home'}
        />
        This is a good example of what an elite Mayan house looked like. They
        were lucky enough to live in sprawling palace-like homes. Like modern
        mega-mansions, the Mayan elites also had guest houses and separate wings
        of their mansion where their slaves and servants resided to wait on
        their every need.{' '}
        <ProjectCite
          cite='Tarlton Law Library . Last modified November 8, 2018 . '
          num={6}
        />
        <ProjectImage
          img={court}
          alt={'maya ballcourt'}
          cite={'Maya ballcourt'}
        />
        This is a picture of the arena in which sports games were played. The
        elites also participated in entertainment. They would often times go out
        into society to watch a sports game where they’d watch players compete
        in games which were similar to modern day soccer, kickball and baseball.
        <ProjectCite
          cite='Tarlton Law Library . Last modified November 8, 2018 . '
          num={7}
        />
        However, this wasn’t the only form of entertainment. Mayan elites would
        attend dances in which the elites danced while others played music, they
        would go to theater and like modern day elites, they would attend
        soirees and fete-like gatherings. The elites oftentimes went out into
        society and had a lot of fun.
        <ProjectImage
          img={calender}
          alt={'maya calender'}
          cite='This is the Mayan calendar which was developed and created by ancient Mayan astrologers and artists.'
        />
        Due to the fact that society valued math and astrology the Mayans were
        able to have a very advanced astrological system as well as make very
        important discoveries in Math. The Mayan calendar is extremely important
        as well as their discovery of the number zero.
        <ProjectCite
          cite='Miller, Mary. Mayance Nations and Languages. 2nd ed. Vol. 1 . N.p.: W.W Norton, 1995 .'
          num={8}
        />
        It could be argued if Mayan society didn’t value this form of
        intellectualism these advancements wouldn’t have been made.
        <Heading size={'lg'} color='red.600' pt={6}>
          The Merchants
        </Heading>
        Right below the elites was the merchant class. The merchant class sort
        of acted as a middling class for the Mayans. However, these people were
        incredibly well off.{' '}
        <ProjectCite
          cite='Tarlton Law Library . Last modified November 8, 2018 . '
          num={9}
        />{' '}
        They would be considered the equivalent of people who are high upper
        middle class or low upper class by our standards today.
        <ProjectCite
          cite="Willey, Gordan. 'The Collapse of Classic Mayan Civilization.' University of Chicago Press 1 (April 8, 1971): 1-18."
          num={10}
        />{' '}
        Some jobs which merchants held were merchants, farmers, artists,
        arichtects and slave traders. It was very easy for someone who was born
        into this social class to work their way up into the elite class.{' '}
        <ProjectCite
          cite='Tarlton Law Library . Last modified November 8, 2018 . '
          num={11}
        />{' '}
        This would often times be by expanding their business if they owned a
        farm of were a slave trader or by getting invovled in math and astrology
        and working their way.
        <ProjectCite
          cite='Webster, David. "The Uses and Abuses of the Ancient Maya ." PDF . Last modified , 2009.'
          num={12}
        />{' '}
        <br /> <br />
        People within the merchant class would often times have one or two
        servants or slaves to attend to their domestic needs or help them work
        on their farm. However, unlike the elite class they didn’t have a whole
        fleet of servants or slaves to help them out. They would occasionally
        attend sporting events or dances. It should be noted that unlike the
        elite class they weren’t venturing out into society all of the time.
        <ProjectImage
          img={stone}
          alt={'maya home'}
          cite='Maya Merchant Class Home'
        />
        This is a good example of the type of house a member of the merchant
        class lived in. As one can see it’s by no means a mansion but it’s a lot
        nicer than what the average lower class Mayan lived in. They couldn’t
        afford to have guest houses or separate wings for their house for their
        domestic staff but they would often times have rooms in their house for
        live in servants or slaves and a nice spacious house like how many high
        upper middle class lower upper class people live today.
        <Heading size={'lg'} color='green.600' pt={6}>
          The Serfs
        </Heading>
        Below the merchant class was the surf class. Surfs did not live like
        average middle class people. They oftentimes struggled to get by and to
        put food on the table. Surfs would be the modern day equivalent of
        working class or underclass people in modern society. Surfs oftentimes
        worked on mining crops on a farm owned by an elite or a merchant, helped
        to build houses and palaces by lifting very heavy stone or they worked
        as servants.
        <ProjectCite
          cite={'Tarlton Law Library . Last modified November 8, 2018 . '}
          num={13}
        />
        Surfs basically lived like modern day working class people. They would
        work very, very hard all day long, oftentimes doing jobs which society
        scoffed at or didn’t value and they would come home to sleep and do it
        all over again. Being a servant in the peasant was a pretty good job.
        Surfs could also never afford to go out into society and see a sports
        game or go to dances.
        <ProjectCite
          cite={
            "Willey, Gordan. 'The Collapse of Classic Mayan Civilization.' University of Chicago Press 1 (April 8, 1971): 1-18."
          }
          num={14}
        />
        <ProjectImage
          img={home}
          alt={'Maya Home'}
          cite='This is a good example of a surf’s house. It was very, very small and it was a hut. And it only had one room where whole families would live. '
        />
        <Heading size={'lg'} color='orange.600'>
          The Slaves
        </Heading>
        Below the surfs were slaves. Slavery was not at all similar to modern
        day United States or Carribian slavery. Slavery was not based on race
        nor was it generational.
        <ProjectCite
          cite='Webster, David. "The Uses and Abuses of the Ancient Maya ." PDF . Last modified , 2009.'
          num={15}
        />{' '}
        Slaves were often times children who grew up as orphans and were never
        adapted by a different family, people who committed some type of
        criminal offense such as stealing or murder or people of captured
        territory. Sometimes people were forced into slavery if they couldn’t
        pay off their debt.
        <ProjectCite
          cite={
            'Webster, David. "The Uses and Abuses of the Anicent Maya ." PDF . Last modified , 2009.'
          }
          num={16}
        />
        Sometimes people would even sell themselves into slavery.
        <ProjectCite
          cite={'Tarlton Law Library . Last modified November 8, 2018 . '}
          num={17}
        />
        This was because Mayan surfs were usually pretty poor and had a hard
        time putting food on the table. Therefore, if one member of the family
        sold themselves into slavery they could give that money to the rest of
        the family so they could have a better chance at surviving or moving
        upward in society. It’s also important to note that slavery was not
        generational.
        <ProjectCite
          cite={'Tarlton Law Library . Last modified November 8, 2018 . '}
          num={18}
        />
        <br /> <br />
        Although slaves in the Mayan empire had no rights or privileges, slave
        owners were not nearly as brutal towards their property as more modern
        day slave owners were to theirs.
        <ProjectCite
          cite='Kelly, David H. Deciphering Mayan Script. 2nd ed. Austin Texas: University of Austin Texas, 1976 . '
          num={19}
        />{' '}
        Basically there’s no evidence showing that Mayan slaves were whipped,
        beaten or brutally killed.
        <ProjectCite
          cite={
            'Webster, David. "The Uses and Abuses of the Anicent Maya ." PDF . Last modified , 2009.'
          }
          num={20}
        />
        Although the exact treatment of each slave probably vaired depending
        upon the person who owned them there’s no strong evidence showing that
        slaves were horribly abused or mistreated despite having no rights.
        <ProjectImage
          img={farming}
          alt={'Maya Slaves'}
          cite={'This is a picture depicting Mayan slaves working on a farm. '}
        />
        <Heading size={'lg'}>Women in the Maya Empire</Heading>
        Women have been oppressed in virtually all time periods and throughout
        all cultures. The Mayan empire was no different. A Mayan girl lived with
        her family until she found a husband and then she went to live with her
        new man. Women in the Mayan empire were seen as being subordinate to
        men.
        <ProjectCite
          cite={'Don, Linn. Mr. Donn . https://mayas.mrdonn.org/women.html. '}
          num={21}
        />{' '}
        They’re duty was to be good wives, manage the home and bring up the
        children. Wealthy Mayan women could not inherit money nor were they able
        to earn money from working.
        <ProjectCite
          cite={
            'Webster, David. "The Uses and Abuses of the Anicent Maya ." PDF . Last modified , 2009.'
          }
          num={22}
        />
        <ProjectImage
          img={women}
          alt={'maya women'}
          cite={'This is a depiction of two high class Mayan women. '}
        />
        <Heading size={'lg'} color={'teal.400'}>
          Maya Social System{' '}
        </Heading>
        A lot of people mistake the Mayan social system as a caste system. It
        wasn’t. In a caste system upward social mobility is impossible and it
        was possible for the merchant class to move upward.{' '}
        <ProjectCite
          cite={
            'Webster, David. "The Uses and Abuses of the Anicent Maya ." PDF . Last modified , 2009.'
          }
          num={23}
        />{' '}
        Furthermore, if it was a caste systems surfs would not have been able to
        become slaves.{' '}
        <ProjectCite
          cite={'Tarlton Law Library . Last modified November 8, 2018 . '}
          num={24}
        />{' '}
        The reason why people mistake the Mayan system as a caste system is
        because there was a huge gap between the king, elites and merchant class
        and the surfs and slaves. When there’s that huge of a gap and when a
        society utilizes slavery, it makes upward moblity in the lower classes
        nearly impossible.
        <ProjectCite
          cite={
            "Willey, Gordan. 'The Collapse of Classic Mayan Civilization.' University of Chicago Press 1 (April 8, 1971): 1-18."
          }
          num={25}
        />{' '}
        The Mayans did have something which was closer to a plutocratic system
        which means that the wealthy people were extremely wealthy and the poor
        were extremely poor and even male Mayan surfs had pretty much no say or
        contribution to overall society.
        <ProjectCite
          cite='Kelly, David H. Deciphering Mayan Script. 2nd ed. Austin Texas: University of Austin Texas, 1976 . '
          num={26}
        />{' '}
      </Container>
    </GridItem>
  )
}

export default AspectJalaine
