import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

const BaseBlock = ({ header, children }) => {
  return (
    <Card style={{padding: '10px', margin: '8px'}}>
      <CardHeader
        action={
          <div>
            {
              header.action && header.action.map(item => {
                if(item.type === 'icon') {
                  return (
                    <IconButton aria-label={item.alabel}>
                      {item.icon}
                    </IconButton>
                  );
                }
              })
            }
          </div>
        }
        title={header.title}
        style={{padding: 0}}
      />
      <CardContent style={{padding: 0}}>
        {children}
      </CardContent>
    </Card>
  );
};

export default BaseBlock;