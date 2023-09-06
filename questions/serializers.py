from rest_framework import serializers
from .models import Mark
from decimal import Decimal

class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mark
        fields = '__all__'
        
    def create(self, data):
        request = self.context.get('request')
        #breakpoint()
        user = request.user
        if not user:
            raise PermissionError('Must be logged in to use this feature')
        else:
            mark_obj = Mark.objects.create(
                size_in_mm=Decimal(data['size_in_mm']), 
                description=data['description'], 
                color=data['color'], 
                texture = data['texture'], 
                has_grown=data['has_grown'], 
                position_on_body_x=Decimal(data['position_on_body_x']), 
                position_on_body_y=Decimal(data['position_on_body_y']), 
                user = user)
            mark_obj.save()
            return mark_obj
    def to_internal_value(self, data):
        data['user'] = self.context.get('request').user.user_id
        data['size_in_mm'] = Decimal(data['size'])
        data['position_on_body_x'] = Decimal(data['point']['x'])
        data['position_on_body_y'] = Decimal(data['point']['y'])
        return super().to_internal_value(data)


        
    

###
 
# {
#     "email":"george@george.com",
#     "password":"george12345"
# }

###