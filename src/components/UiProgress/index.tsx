import React, { FC } from 'react';
import { Progress, ProgressProps, Flex, Box } from '@chakra-ui/react';

interface IProps extends ProgressProps {
  leftIcon?: JSX.Element;
  iconColor?: string;
}

const UiProgress: FC<IProps> = ({ leftIcon, iconColor, ...props }) => (
  <Flex alignItems="center" width="100%">
    {leftIcon && (
      <Box marginRight="1rem" color={iconColor}>
        {leftIcon}
      </Box>
    )}
    <Progress width="100%" borderRadius="md" size="sm" {...props} />
  </Flex>
);

export default UiProgress;
