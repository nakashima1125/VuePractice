'''
s1とs2の配列を比較し、どの程度似ているかを返す(max=1)
全く形も異なるならば-1を返す。
'''
def simRatio(s1, s2)
  cnt = 0
  if s1.size != s2.size then
    return -1
  end

  for i in 1..s1.size do
    if s1[i] == s2[i] then
      cnt += 1
    end
  end
  return cnt.to_f / s1.size.to_f
end

s1 = ['a','p','p','l','e']
s2 = ['a','p','p','l','e']
s3 = ['a','p','p','t','b']
s4 = ['a','p',]

for j in [s2, s3, s4] do
  ans = simRatio(s1, j)
  puts(ans)
end
