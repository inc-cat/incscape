import Album from './Album';

import wirfos from './albumCovers/wirfos.jpg';
import impressions2002 from './albumCovers/impressions2002.jpg';
import structure from './albumCovers/structure.jpg';
import incline from './albumCovers/inclineincline.jpg';
import sunrise from './albumCovers/sunrise.jpg';
import impressionsfuture from './albumCovers/impressionsfuture.jpg';
import silentsunset from './albumCovers/silentsunset.jpg';
import expaningcircles from './albumCovers/expaningcircle.jpg';
import terminal from './albumCovers/terminal.jpg';
import cloudportrait from './albumCovers/cloudportrait.jpg';
import twelvehours from './albumCovers/twelvehours.jpg';
import anwarinc from './albumCovers/anwarinc.jpg';
import concentration1 from './albumCovers/concentration1.jpg';
import concentration9 from './albumCovers/concentration9.jpg';
import { useState } from 'react';
import About from '../About';

export default function Archive() {
  const [extra, toggleExtra] = useState(false);
  return (
    <div>
      <Album
        title="Watching it rain from outer space"
        releaseDate="Sepetember 2023"
        url="https://anwarlouis.bandcamp.com/album/watching-it-rain-from-outer-space"
        coverArt={wirfos}
      >
        <p>
          Actually finished in November 2021. Before I moved to the north of
          England, every time I would travel to places like Manchester, it'd
          always be raining. My friend lived in a high rise by a busy road and
          I'd just watch cars pass by during the evenings when things were
          quiet. It always felt other wordly and I can't really explain why but
          it was more of me just feeling like I was watching it rain from outer
          space where the streets of Manchester were isolated from me and my
          surroundings.{' '}
        </p>
        Art by Kuro:{' '}
        <a href="https://bsky.app/profile/kurobatte.bsky.social">BlueSky</a> |
        <a href="https://twitter.com/kurobatte"> Twitter </a>
      </Album>

      <Album
        title="Impressions: 2002"
        releaseDate="August 2023"
        url="https://anwarlouis.bandcamp.com/album/impressions-2002"
        coverArt={impressions2002}
      >
        <p>
          It had been such a long time since I put music out, normally I set a
          day aside to finalise tracks and add processing to make everything
          sound as good as it possibly can. However since moving to the north of
          England I have left all of my equipment in London and until I started
          this project, I hadn't really made much music at all. I decided that I
          needed to make music again or I'd just fall out of making music in
          total. I thought the best idea was to continue with an idea I have had
          on the backburner for a few years now. I had always wanted to make an
          "Impressions" series but never really got around to doing it as
          creativity can be all over the place for me. I can hardly ever just
          finish a project without going off into many directions and because of
          this I have many unfinished albums that can progress at the oddest
          times or just stay as 1 track.
        </p>
        <p>
          For this project, instead of music that I felt was more up to date
          with the short game ideas I had in my head, i decided to take it back
          to the hayday of the PS2, around the time Ratchet and Clank came out.
          A lot of game soundtracks were instrumental in inspiring and shaping
          this project. After being so long out of making music, this project
          came together quite quickly and even through simply playing around at
          time, I feel I made some good work here.{' '}
        </p>
        Art by Sontra:{' '}
        <a href="https://bsky.app/profile/sontra.bsky.social">BlueSky</a> |{' '}
        <a href="https://twitter.com/sontra_"> Twitter </a>
      </Album>

      <Album
        title="Structure"
        releaseDate="February 2020"
        url="https://anwarlouis.bandcamp.com/album/impressions-2002"
        coverArt={structure}
      >
        <p>
          Looking back on this album, I'm not sure I know much about how I felt
          making it. This was just me making music about my rush hour commute to
          work. I'd run from the DLR platforms to the Jubilee line and be
          sandwiched into a small train from Canning Town to Canada Water and
          then board an Overground train to get me to work. When I wanted a
          seat, I'd board a train in the wrong direction and go back 1 stop
          (West Ham) to make sure I got a seat. I don't have fond memories of
          rush hour travelling. Each song is a mish mash of my my thoughts about
          those minutes of my morning.
        </p>
        Art by Lovewin:{' '}
        <a href="https://bsky.app/profile/lovewin.bsky.social">BlueSky</a> |
        <a href="https://twitter.com/lovewin"> Twitter </a>
      </Album>

      <Album
        title="incline incline"
        releaseDate="July 2018"
        coverArt={incline}
        url="https://anwarlouis.bandcamp.com/album/incline-incline"
      >
        <p>
          The inspiration behind this whole album is weird. It's just random
          stuff I did or saw throughout my week that I'd come across and end up
          writing a piece to. It's fun to hum tunes to yourself, get home and
          just put stuff together.
        </p>
        <b>Some track names explained</b>
        <ul>
          <li>
            ((Rest)): It was a random birb meme that I had accidentally saved to
            my phone that I saw when scrolling through my phone.
          </li>
          <li>
            Slade Grn Via Wool A: After work, I'd get the 19:41 from Lewisham
            towards Slade Green and "Slade Grn Via Wool A" was what the display
            on the train said.
          </li>
        </ul>
        Art by Forgemane: <a href="https://twitter.com/forgemane"> Twitter </a>
      </Album>

      <Album
        title="Sunrise / Base"
        releaseDate="December 2017"
        coverArt={sunrise}
        url="https://anwarlouis.bandcamp.com/album/sunrise-base"
      >
        <p>
          This album is basically a pseudo vinyl release, track 1 and 3 were
          going to be side A and the remaining tracks were to be on side B.
          There isn't much about this to talk about, I had fun just making
          tracks for the sake of making tracks related to words. A huge shout
          out to Eli Way for letting me remix Fresh, I dunno where to find it
          online but it is one amazing song and I'd like to think I did it
          justice.
        </p>
        Art by Thomas Barba:{' '}
      </Album>

      <Album
        title="Impressions: Future Zone"
        releaseDate="December 2016"
        coverArt={impressionsfuture}
        url="https://anwarlouis.bandcamp.com/album/impressions-future-zone"
      >
        <p>
          All throughout me making music, people have always said that my music
          sounds like "video game music", so I just ended up embracing it at
          this point and making something that I considered to be background
          music for video games. A range of genres and styles inspired by games
          such as F-Zero GX, Final Fantasy III and many others. This marks the
          start to my Impressions series, I intend it to be an ongoing series
          with updates coming when I feel like making them,
        </p>
        Art by iloveui: <a href="https://iloveui.com/">Website</a> |
        <a href="https://twitter.com/weloveui"> Twitter </a>
      </Album>

      <Album
        title="Silent Sunset"
        releaseDate="July 2016"
        coverArt={silentsunset}
        url="https://anwarlouis.bandcamp.com/album/silent-sunset"
      >
        <p>
          I don't normally do beat making projects with samples so I thought I'd
          just do it. This was initially going to be a bunch of short clips that
          all went into each other one after the other. I ended up being a lot
          more inspired and a lot of these tracks became full length. Only the
          first few tracks I made were short and attached to others.{' '}
        </p>
        Art by Thomas Barba:{' '}
      </Album>

      <Album
        title="expanding circles"
        releaseDate="November 2015"
        coverArt={expaningcircles}
        url="https://anwarlouis.bandcamp.com/album/expanding-circles"
      >
        <p>
          This is the second part to the Cloud Portrait and expanding circles
          duo. Unlike Cloud portrait, I went into each track with the mentality
          of just messing around and seeing where things went. I'd make sounds
          or rhythms and just improvise, there'd be no plan at all. All track
          titles are the original project title and I named the album after the
          second to last track. Hesoyam became a homage to Can You Feel It by
          Mr. Fingers.
        </p>
      </Album>

      <Album
        title="Terminal"
        releaseDate="September 2015"
        coverArt={terminal}
        url="https://anwarlouis.bandcamp.com/album/terminal"
      >
        <p>
          Not much to say apart from that I made a random album inspired by
          playing Crash Bandicoot games and watching my friend play games.
        </p>
        Art by KirameKirai: <a href="https://twitter.com/kirariinn">Twitter</a>
      </Album>

      <Album
        title="Cloud Portrait"
        releaseDate="July 2015"
        coverArt={cloudportrait}
        url="https://anwarlouis.bandcamp.com/album/cloud-portrait"
      >
        <p>
          I listend to a couple of tracks, one being Swindon by Venetian Snares
          and the other being Prophecy by Harold Haltermayer and the two just
          instantly inspired me to make a synthpop inspired project. I pretty
          much had an idea for the entire album before I'd even opened my DAW,
          kept to the same idea and based the idea off of a concept for an album
          that I have a lot of love for. This is the first of a two part album!
        </p>
        Art by KirameKirai: <a href="https://twitter.com/kirariinn">Twitter</a>
      </Album>

      <Album
        title="12 Hours"
        releaseDate="March 2015"
        coverArt={twelvehours}
        url="https://anwarlouis.bandcamp.com/album/12-hours"
      >
        <p>
          I don't drink alcohol, but I have friends that do and this was me just
          making a project inspired by the stories they'd tell me, from the
          beginning to sometimes what might be a hangover or whatever else. It's
          the soundtrack from the first drink until 12 hours later. I purposely
          put a few production overlaps in the songs to add a small amount of
          continuity to make the seemingly different tracks flow together a bit
          more.
        </p>
        Art by Thomas Barba:{' '}
      </Album>

      <Album
        title="anwar and inc"
        releaseDate="May 2014"
        coverArt={anwarinc}
        url="https://anwarlouis.bandcamp.com/album/anwar-and-inc"
      >
        <p>
          A project where the concept was my pet cat and I just flying and
          taking the sights in. I was very inspired by early bass music and
          dubstep and I'd never really pulled back from melodic writing before.
          I felt that people were trying to put me in a box and this album was
          to prove I could do it.
        </p>
        Art by KirameKirai: <a href="https://twitter.com/kirariinn">Twitter</a>{' '}
        <br></br>Physical media available on bandcamp.
      </Album>

      <Album
        title="Concentration 1"
        releaseDate="March 2014"
        coverArt={concentration1}
        url="https://anwarlouis.bandcamp.com/album/concentration-1"
      >
        Artwork by Tea
      </Album>

      <Album
        title="Concentration 9"
        releaseDate="January 2014"
        coverArt={concentration9}
        url="https://anwarlouis.bandcamp.com/album/concentration-9"
      >
        Artwork by Tea
      </Album>

      <button
        onClick={function () {
          toggleExtra(!extra);
        }}
      >
        {extra ? 'Hide' : 'Show '}{' '}
      </button>
      {extra && <About />}
    </div>
  );
}
