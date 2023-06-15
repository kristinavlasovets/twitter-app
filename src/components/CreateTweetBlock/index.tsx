import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useTheme } from 'styled-components';
import { v4 } from 'uuid';

import { createDocument } from '@/api/firebase/createDocument';
import { uploadFile } from '@/api/firebase/uploadFile';
import MyCloseSvg from '@/assets/close.svg';
import MyImageSvg from '@/assets/image-blue.svg';
import MyPhotoSvg from '@/assets/photo.svg';
import { createTweetBlockText, FirebaseCollections } from '@/constants/config';
import { Colors } from '@/constants/styles';
import { useAppSelector } from '@/hooks/useAppSelector';
import { userSelector } from '@/store/slices/userSlice/selectors';

import Button from '../Button';

import {
  FileWrapper,
  Icon,
  ImageIcon,
  TextArea,
  TextAreaWrapper,
  Tweet,
  UploadFile,
  UploadFileLabel,
  Wrapper,
} from './styles';
import { CreateTweetBlockProps } from './types';

const { buttonText, photoAlt, textAreaPlaceholder, fileType, imageAlt, cancelAlt } =
  createTweetBlockText;

const CreateTweetBlock: FC<CreateTweetBlockProps> = ({
  setTweets,
  isModal,
  isModalVisible,
  setIsModalVisible,
}) => {
  const { name, email, id, photo } = useAppSelector(userSelector);
  const [tweetValue, setTweetValue] = useState<string>('');
  const [image, setImage] = useState<File>();
  const theme = useTheme();

  const zeroIndex = 0;

  if (!isModalVisible && isModal) {
    return null;
  }

  const onHandlerCreateTweet = async (e: FormEvent) => {
    e.preventDefault();
    if (tweetValue) {
      const tweet = {
        tweetId: v4(),
        creator: { name, email, id, photo },
        text: tweetValue,
        date: Date.now(),
        image: '',
        likes: [],
      };

      await createDocument({
        collection: FirebaseCollections.TWEETS,
        id: tweet.tweetId,
        document: tweet,
      });

      if (image) {
        await uploadFile({
          collection: FirebaseCollections.TWEETS,
          id: tweet.tweetId,
          file: image,
        });

        const url = URL.createObjectURL(image);

        tweet.image = url;
      }

      setTweets((prev) => [tweet, ...prev]);
    }
    setTweetValue('');
  };

  const onHandlerChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTweetValue(value);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setImage(files[zeroIndex]);
    }
  };

  const onHandlerClose = () => {
    setIsModalVisible!(false);
  };

  return (
    <Wrapper isModal={isModal}>
      <Icon src={photo || MyPhotoSvg} alt={photoAlt} />
      <Tweet onSubmit={onHandlerCreateTweet}>
        <TextAreaWrapper>
          <TextArea
            placeholder={textAreaPlaceholder}
            value={tweetValue}
            onChange={onHandlerChangeInput}
          />
          <FileWrapper>
            <UploadFileLabel htmlFor={fileType}>
              <UploadFile
                type={fileType}
                id={fileType}
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
              <ImageIcon src={MyImageSvg} alt={imageAlt} />
            </UploadFileLabel>
          </FileWrapper>
        </TextAreaWrapper>

        <Button
          data-testid="createTweetButton"
          type="submit"
          width={theme?.width.xs}
          backgroundColor={Colors.DARK_BLUE}
          color={Colors.WHITE}
          fontSize={theme?.fontSizes.xxs}
          disabled={tweetValue === ''}
          opacity={theme?.opacities.s}
        >
          {buttonText}
        </Button>
      </Tweet>
      {isModal && <ImageIcon src={MyCloseSvg} alt={cancelAlt} onClick={onHandlerClose} />}
    </Wrapper>
  );
};

export default CreateTweetBlock;
