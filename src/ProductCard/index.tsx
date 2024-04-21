import { ProductCardBaseProvider } from './base';
import { Name } from './atom/Name';
import { DeliveryType } from './atom/DeliveryType';
import { Description } from './atom/Description';
import { ReviewCount } from './atom/ReviewCount';
import { Tag } from './atom/Tag';

// TODO: 상품 데이터 Props 정리
const ProductCard = () => {
  return (
    <ProductCardBaseProvider>
      <DeliveryType text="샛별배송" />
      <Name text="유레카 블루베리 100g 3종 (택1) (국산)" />
      <Description text="큼지막한 사이즈를 자랑하는 블루베리" />
      <ReviewCount count={1000} />
      <Tag type="KURLY_ONLY" name="컬리Only" />
    </ProductCardBaseProvider>
  );
};

export { ProductCard };
