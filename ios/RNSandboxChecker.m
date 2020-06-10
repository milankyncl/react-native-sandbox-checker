#import "SandboxChecker.h"

@implementation SandboxChecker

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getReceiptLocation, resolver: (RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSURL *receiptURL = [[NSBundle mainBundle] appStoreReceiptURL];
  NSString *receiptURLString = [receiptURL path];
  resolve(receiptURLString);
}

@end
