// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Componentes|Audio',
  decorators: [withA11y]
};

export const Audio = (): JSX.Element => {
  return (
    <div>
      <audio controls>
        <source
          src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"
          type="audio/ogg"
        />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};
