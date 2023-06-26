import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { Colors, createTweetBlockText, icons } from '@/constants';
import { useAppSelector } from '@/hooks/useAppSelector';
import { userSelector } from '@/store/slices/userSlice/selectors';
import { commonTheme } from '@/styles/theme';
import { createNewTweet } from '@/utils/helpers/createNewTweet';

import Button from '../Button';

import {
  FileWrapper,
  Icon,
  ImageIcon,
  PreloadImage,
  TextArea,
  TextAreaWrapper,
  Tweet,
  UploadFile,
  UploadFileLabel,
  Wrapper,
} from './styles';
import { CreateTweetBlockProps } from './types';

const { buttonText, photoAlt, textAreaPlaceholder, imageAlt, cancelAlt, preloadAlt } =
  createTweetBlockText;

const { MyImageSvg, MyPhotoSvg, MyCloseSvg } = icons;

const CreateTweetBlock: FC<CreateTweetBlockProps> = (props) => {
  const { setTweets, isModal, isModalVisible, setIsModalVisible } = props;
  const { name, email, id, photo } = useAppSelector(userSelector);
  const [tweetValue, setTweetValue] = useState<string>('');
  const [image, setImage] = useState<File>();

  if (!isModalVisible && isModal) {
    return null;
  }

  const onHandlerCreateTweet = async (e: FormEvent) => {
    e.preventDefault();
    if (tweetValue) {
      const tweet = await createNewTweet({ email, id, image, name, photo, tweetValue });

      setTweets((prev) => [tweet, ...prev]);
    }
    setTweetValue('');
    setImage(undefined);
    if (isModal) setIsModalVisible!(false);
  };

  const onHandlerChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTweetValue(value);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setImage(files[0]);
    }
  };

  const onHandlerClose = () => {
    setIsModalVisible!(false);
  };

  return (
    <Wrapper isModal={isModal} data-cy="createTweetWrapper">
      <Icon src={photo || MyPhotoSvg} alt={photoAlt} />
      <Tweet onSubmit={onHandlerCreateTweet}>
        <TextAreaWrapper>
          <TextArea
            data-cy="textArea"
            placeholder={textAreaPlaceholder}
            value={tweetValue}
            onChange={onHandlerChangeInput}
          />
          {image && <PreloadImage src={URL.createObjectURL(image)} alt={preloadAlt} />}
          <FileWrapper>
            <UploadFileLabel htmlFor={isModal ? 'fileModal' : 'file'}>
              <UploadFile
                type="file"
                id={isModal ? 'fileModal' : 'file'}
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
              <ImageIcon src={MyImageSvg} alt={imageAlt} data-cy="uploadImage" />
            </UploadFileLabel>
          </FileWrapper>
        </TextAreaWrapper>

        <Button
          data-testid="createTweetButton"
          type="submit"
          width={commonTheme.width.xs}
          backgroundColor={Colors.DARK_BLUE}
          color={Colors.WHITE}
          fontSize={commonTheme.fontSizes.xxs}
          disabled={tweetValue === ''}
          opacity={commonTheme.opacities.s}
        >
          {buttonText}
        </Button>
      </Tweet>
      {isModal && <ImageIcon src={MyCloseSvg} alt={cancelAlt} onClick={onHandlerClose} />}
    </Wrapper>
  );
};

export default CreateTweetBlock;
