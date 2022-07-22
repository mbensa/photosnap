import React from 'react';
import Text from '../components/Text';
import '../components/compareBox.css';
import useMobile from '../hooks/useMobile';

export default function CompareBox() {
  const { isMobile } = useMobile();

  if (isMobile) {
    return (
      <div>
        <Text type="h5">THE FEATURES</Text>
        <hr className="compareLineMain" />
        <div>
          <Text type="h5">UNLIMITED STORY POSTING</Text>
          <div className="comparePlanTypeContainer">
            <div>
              <Text type="h6">BASIC</Text>
              <span>&#10003;</span>
            </div>
            <div>
              <Text type="h6">PRO</Text>
              <span>&#10003;</span>
            </div>
            <div>
              <Text type="h6">BUSINESS</Text>
              <span>&#10003;</span>
            </div>
          </div>
        </div>
        <hr className="compareLine" />
        <div>
          <Text type="h5">UNLIMITED PHOTO UPLOAD</Text>
          <div className="comparePlanTypeContainer">
            <div>
              <Text type="h6">BASIC</Text>
              <span>&#10003;</span>
            </div>
            <div>
              <Text type="h6">PRO</Text>
              <span>&#10003;</span>
            </div>
            <div>
              <Text type="h6">BUSINESS</Text>
              <span>&#10003;</span>
            </div>
          </div>
        </div>
        <hr className="compareLine" />
        <div>
          <Text type="h5">EMBEDDING CUSTOM CONTENT</Text>
          <div className="comparePlanTypeContainer">
            <div>
              <Text type="h6">BASIC</Text>
            </div>
            <div>
              <Text type="h6">PRO</Text>
              <span>&#10003;</span>
            </div>
            <div>
              <Text type="h6">BUSINESS</Text>
              <span>&#10003;</span>
            </div>
          </div>
        </div>
        <hr className="compareLine" />
        <div>
          <Text type="h5">CUSTOMIZE METADATA</Text>
          <div className="comparePlanTypeContainer">
            <div>
              <Text type="h6">BASIC</Text>
            </div>
            <div>
              <Text type="h6">PRO</Text>
              <span>&#10003;</span>
            </div>
            <div>
              <Text type="h6">BUSINESS</Text>
              <span>&#10003;</span>
            </div>
          </div>
        </div>
        <hr className="compareLine" />
        <div>
          <Text type="h5">ADVANCED METRICS</Text>
          <div className="comparePlanTypeContainer">
            <div>
              <Text type="h6">BASIC</Text>
            </div>
            <div>
              <Text type="h6">PRO</Text>
            </div>
            <div>
              <Text type="h6">BUSINESS</Text>
              <span>&#10003;</span>
            </div>
          </div>
        </div>
        <hr className="compareLine" />
        <div>
          <Text type="h5">PHOTO DOWNLOADS</Text>
          <div className="comparePlanTypeContainer">
            <div>
              <Text type="h6">BASIC</Text>
              <span>&#10003;</span>
            </div>
            <div>
              <Text type="h6">PRO</Text>
              <span>&#10003;</span>
            </div>
            <div>
              <Text type="h6">BUSINESS</Text>
              <span>&#10003;</span>
            </div>
          </div>
        </div>
        <hr className="compareLine" />
        <div>
          <Text type="h5">SEARCH ENGINE INDEXING</Text>
          <div className="comparePlanTypeContainer">
            <div>
              <Text type="h6">BASIC</Text>
            </div>
            <div>
              <Text type="h6">PRO</Text>
            </div>
            <div>
              <Text type="h6">BUSINESS</Text>
              <span>&#10003;</span>
            </div>
          </div>
        </div>
        <hr className="compareLine" />
        <div>
          <Text type="h5">CUSTOM ANALYTICS</Text>
          <div className="comparePlanTypeContainer">
            <div>
              <Text type="h6">BASIC</Text>
            </div>
            <div>
              <Text type="h6">PRO</Text>
            </div>
            <div>
              <Text type="h6">BUSINESS</Text>
              <span>&#10003;</span>
            </div>
          </div>
        </div>
        <hr className="compareLine" />
      </div>
    );
  } else {
    return (
      <div className="compareBoxContainer">
        <Text type="h2" className="compareBoxTitle">
          COMPARE
        </Text>
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            THE FEATURES
          </Text>
          <Text type="h5" className="compareBoxWidth">
            BASIC
          </Text>
          <Text type="h5" className="compareBoxWidth">
            PRO
          </Text>
          <Text type="h5" className="compareBoxWidth">
            BUSINESS
          </Text>
        </div>
        <hr className="compareLineMain" />
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            UNLIMITED STORY POSTING
          </Text>
          <span className="compareBoxWidth">&#10003;</span>
          <span className="compareBoxWidth">&#10003;</span>
          <span className="compareBoxWidth">&#10003;</span>
        </div>
        <hr className="compareLine" />
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            UNLIMITED PHOTO UPLOAD
          </Text>
          <span className="compareBoxWidth">&#10003;</span>
          <span className="compareBoxWidth">&#10003;</span>
          <span className="compareBoxWidth">&#10003;</span>
        </div>
        <hr className="compareLine" />
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            EMBEDDING CUSTOM CONTENT
          </Text>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth">&#10003;</span>
          <span className="compareBoxWidth">&#10003;</span>
        </div>
        <hr className="compareLine" />
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            CUSTOMIZE METADATA
          </Text>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth">&#10003;</span>
          <span className="compareBoxWidth">&#10003;</span>
        </div>
        <hr className="compareLine" />
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            ADVANCED METRICS
          </Text>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth">&#10003;</span>
        </div>
        <hr className="compareLine" />
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            PHOTO DOWNLOADS
          </Text>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth">&#10003;</span>
        </div>
        <hr className="compareLine" />
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            SEARCH ENGINE INDEXING
          </Text>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth">&#10003;</span>
        </div>
        <hr className="compareLine" />
        <div className="compareBoxPlan">
          <Text type="h5" className="compareBoxWidth compareBoxStyle">
            CUSTOM ANALYTICS
          </Text>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth"></span>
          <span className="compareBoxWidth">&#10003;</span>
        </div>
        <hr className="compareLine" />
      </div>
    );
  }
}
