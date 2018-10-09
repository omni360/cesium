define([], function() {
    'use strict';
    /**
         * @alias KmlLookAt
         * @constructor
         *
         * @param {Cartesian3} position camera position
         * @param {HeadingPitchRange} headingPitchRange camera orientation
         */
    class KmlLookAt {
        constructor(position, headingPitchRange) {
            this.position = position;
            this.headingPitchRange = headingPitchRange;
        }
    }

    return KmlLookAt;
});
