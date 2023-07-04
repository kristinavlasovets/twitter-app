import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

import { Colors, createTweetBlockText, icons } from '@/constants';
import { useAppSelector } from '@/hooks';
import { userSelector } from '@/store/slices/userSlice/selectors';
import { commonTheme } from '@/styles/theme';
import { createNewTweet } from '@/utils';

import Button from '../Button';
import Loader from '../Loader';

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

const { buttonText, textAreaPlaceholder } = createTweetBlockText;

const { MyImageSvg, MyPhotoSvg, MyCloseSvg } = icons;

const CreateTweetBlock: FC<CreateTweetBlockProps> = (props) => {
  const { setTweets, isModal, isModalVisible, onClose } = props;

  const { name, email, id, photo } = useAppSelector(userSelector);

  const [tweetValue, setTweetValue] = useState<string>('');
  const [image, setImage] = useState<File>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!isModalVisible && isModal) {
    return null;
  }

  const handleCreateTweet = async (e: FormEvent) => {
    e.preventDefault();
    if (tweetValue) {
      const tweet = await createNewTweet({ email, id, image, name, photo, tweetValue });

      setTweets((prev) => [tweet, ...prev]);
    }
    setTweetValue('');
    setImage(undefined);
    if (isModal) onClose!();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTweetValue(value);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setIsLoading(true);
      const storage = getStorage();
      const storageRef = ref(storage, 'some-child');

      uploadBytes(storageRef, files[0]).then(() => {
        setIsLoading(false);
      });

      setImage(files[0]);
    }
  };

  return (
    <Wrapper isModal={isModal} data-cy="createTweetWrapper">
      <Icon src={photo || MyPhotoSvg} alt="Photo" />
      <Tweet onSubmit={handleCreateTweet}>
        <TextAreaWrapper>
          <TextArea
            data-cy={isModal ? 'modalTextArea' : 'textArea'}
            placeholder={textAreaPlaceholder}
            value={tweetValue}
            onChange={handleChangeInput}
          />
          {isLoading && <Loader />}
          {!isLoading && image && (
            <PreloadImage src={URL.createObjectURL(image)} alt="Image preload" />
          )}
          <FileWrapper>
            <UploadFileLabel htmlFor={isModal ? 'fileModal' : 'file'}>
              <UploadFile
                type="file"
                id={isModal ? 'fileModal' : 'file'}
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
              <ImageIcon src={MyImageSvg} alt="Image" data-cy="uploadImage" />
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
          disabled={tweetValue === '' || isLoading}
          opacity={commonTheme.opacities.s}
        >
          {buttonText}
        </Button>
      </Tweet>
      {isModal && <ImageIcon src={MyCloseSvg} alt="Cancel" onClick={onClose} />}
    </Wrapper>
  );
};

export default CreateTweetBlock;
